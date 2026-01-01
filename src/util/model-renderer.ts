/**
 * Minecraft Model Renderer Utility
 *
 * Renders both mod (Minecolonies) and vanilla Minecraft block models.
 * Automatically resolves block identifiers and parent models.
 */

import type { CollectionEntry } from 'astro:content';
import type { Canvas } from 'canvas';
import { createCanvas, Image } from 'canvas';
import fs from 'fs/promises';
import gl from 'gl';
import type { BlockModel, MinecraftAssets, ModelElement } from 'minecraft-assets';
import mcAssets from 'minecraft-assets';
import path from 'path';
import * as THREE from 'three';

const MODELS_PATH = './minecolonies/src/main/resources/assets';
const TEXTURES_PATH = './minecolonies/src/main/resources/assets';

export type CameraAngle = 'front' | 'back';

export interface RenderBlockOptions {
  version: CollectionEntry<'versions'>;
  width?: number;
  height?: number;
  angle?: CameraAngle;
  rotation?: number;
}

function parseBlockId(blockId: string): { namespace: string; path: string } {
  const [namespace, blockPath] = blockId.includes(':') ? blockId.split(':') : ['minecraft', blockId];
  return { namespace, path: blockPath };
}

function mergeModels(parent: BlockModel, child: BlockModel): BlockModel {
  return {
    parent: child.parent,
    textures: { ...parent.textures, ...child.textures },
    elements: child.elements || parent.elements,
    children: child.children || parent.children
  };
}

async function loadModelById(
  blockId: string,
  modelsPath: string,
  mcAssets: MinecraftAssets,
  modelCache: Map<string, BlockModel>
): Promise<BlockModel> {
  const cached = modelCache.get(blockId);
  if (cached) return cached;

  const { namespace, path: blockPath } = parseBlockId(blockId);

  let model: BlockModel;

  if (namespace === 'minecraft') {
    // Strip 'block/' prefix if present, as minecraft-assets uses flat keys
    const cleanPath = blockPath.replace(/^block\//, '');
    const vanillaModel = mcAssets.blocksModels[cleanPath];
    if (!vanillaModel) {
      throw new Error(`Minecraft model not found: ${blockPath}`);
    }
    model = vanillaModel;
  } else {
    // If blockPath already contains "block/", don't add it again
    // (this happens with parent references like "minecolonies:block/digsite")
    const modelSubPath = blockPath.startsWith('block/') ? blockPath : `block/${blockPath}`;
    const modelPath = path.join(modelsPath, namespace, 'models', `${modelSubPath}.json`);
    const data = await fs.readFile(modelPath, 'utf-8');
    model = JSON.parse(data);
  }

  if (model.parent) {
    try {
      const parentModel = await loadModelById(model.parent, modelsPath, mcAssets, modelCache);
      model = mergeModels(parentModel, model);
    } catch {
      // Parent not found - continue if model has elements defined
    }
  }

  modelCache.set(blockId, model);
  return model;
}

function createTextureFromCanvas(canvas: Canvas): THREE.Texture {
  const texture = new THREE.CanvasTexture(canvas as unknown as HTMLCanvasElement);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}

function createPlaceholder(): THREE.Texture {
  const canvas = createCanvas(16, 16);
  const ctx = canvas.getContext('2d');

  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#ff00ff' : '#000000';
      ctx.fillRect(x, y, 1, 1);
    }
  }

  return createTextureFromCanvas(canvas);
}

async function loadImageFromBase64(base64: string): Promise<Canvas> {
  const img = new Image();

  return new Promise<Canvas>((resolve, reject) => {
    img.onload = () => {
      const canvas = createCanvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas);
    };
    img.onerror = reject;
    img.src = 'data:image/png;base64,' + base64;
  });
}

async function loadVanillaTexture(texturePath: string, mcAssets: MinecraftAssets): Promise<THREE.Texture> {
  // Determine the subdirectory based on the texture path prefix
  let texturePngPath: string;

  if (texturePath.startsWith('item/')) {
    const cleanPath = texturePath.replace(/^item\//, '');
    texturePngPath = path.join(mcAssets.directory, 'items', `${cleanPath}.png`);
  } else if (texturePath.startsWith('block/')) {
    const cleanPath = texturePath.replace(/^block\//, '');
    texturePngPath = path.join(mcAssets.directory, 'blocks', `${cleanPath}.png`);
  } else if (texturePath.startsWith('entity/')) {
    const cleanPath = texturePath.replace(/^entity\//, '');
    texturePngPath = path.join(mcAssets.directory, 'entity', `${cleanPath}.png`);
  } else if (texturePath.startsWith('models/')) {
    // Handle model textures like "models/armor/leather_layer_1"
    texturePngPath = path.join(mcAssets.directory, `${texturePath}.png`);
  } else {
    // Default to blocks for backward compatibility
    texturePngPath = path.join(mcAssets.directory, 'blocks', `${texturePath}.png`);
  }

  try {
    const data = await fs.readFile(texturePngPath);
    const base64 = data.toString('base64');
    const canvas = await loadImageFromBase64(base64);
    return createTextureFromCanvas(canvas);
  } catch {
    return createPlaceholder();
  }
}

async function loadModTexture(namespace: string, texturePath: string, texturesPath: string): Promise<THREE.Texture> {
  try {
    const fullPath = path.join(texturesPath, namespace, 'textures', texturePath + '.png');
    const data = await fs.readFile(fullPath);
    const base64 = data.toString('base64');
    const canvas = await loadImageFromBase64(base64);
    return createTextureFromCanvas(canvas);
  } catch {
    return createPlaceholder();
  }
}

async function loadTexture(
  textureId: string,
  texturesPath: string,
  mcAssets: MinecraftAssets,
  textureCache: Map<string, THREE.Texture>
): Promise<THREE.Texture> {
  const cached = textureCache.get(textureId);
  if (cached) return cached;

  const { namespace, path: texturePath } = parseBlockId(textureId);

  const texture =
    namespace === 'minecraft'
      ? await loadVanillaTexture(texturePath, mcAssets)
      : await loadModTexture(namespace, texturePath, texturesPath);

  textureCache.set(textureId, texture);
  return texture;
}

function resolveTexture(textureRef: string, textures: Record<string, string>): string {
  if (!textureRef.startsWith('#')) return textureRef;

  const key = textureRef.substring(1);
  const resolved = textures[key];

  if (!resolved) return textureRef;

  return resolveTexture(resolved, textures);
}

async function createMesh(
  element: ModelElement,
  textures: Record<string, string>,
  texturesPath: string,
  mcAssets: MinecraftAssets,
  textureCache: Map<string, THREE.Texture>
): Promise<THREE.Mesh> {
  const from = element.from;
  const to = element.to;

  // Convert from Minecraft coordinates (0-16) to Three.js world units
  const width = (to[0] - from[0]) / 16;
  const height = (to[1] - from[1]) / 16;
  const depth = (to[2] - from[2]) / 16;

  const materials: THREE.Material[] = [];
  const faceOrder = ['east', 'west', 'up', 'down', 'south', 'north'];

  // Create custom geometry with proper UV mapping
  const geometry = new THREE.BufferGeometry();
  const vertices: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const materialIndices: number[] = [];

  for (let faceIndex = 0; faceIndex < faceOrder.length; faceIndex++) {
    const faceName = faceOrder[faceIndex];
    const face = element.faces[faceName];

    if (!face) {
      continue;
    }

    const resolvedTexture = resolveTexture(face.texture, textures);
    const texture = await loadTexture(resolvedTexture, texturesPath, mcAssets, textureCache);
    const faceTexture = texture.clone();
    faceTexture.needsUpdate = true;

    // Calculate normalized UV coordinates
    // Note: Minecraft UV coordinates are always in pixel space (0-16 range)
    // regardless of actual texture dimensions
    let u1 = 0,
      v1 = 0,
      u2 = 1,
      v2 = 1;

    if (face.uv) {
      const uv = face.uv;
      u1 = uv[0] / 16;
      v1 = 1 - uv[3] / 16; // Flip V
      u2 = uv[2] / 16;
      v2 = 1 - uv[1] / 16; // Flip V
    }

    // Handle UV rotation
    let uvBottomLeft = [u1, v1];
    let uvBottomRight = [u2, v1];
    let uvTopRight = [u2, v2];
    let uvTopLeft = [u1, v2];

    if (face.rotation) {
      // Rotate UV coordinates by the specified angle
      // Minecraft uses 0, 90, 180, 270 degrees
      // Rotation is applied by swapping corner positions
      switch (face.rotation) {
        case 90:
          // Rotate 90 degrees counter-clockwise: BL->BR, BR->TR, TR->TL, TL->BL
          [uvBottomLeft, uvTopLeft, uvTopRight, uvBottomRight] = [uvBottomRight, uvBottomLeft, uvTopLeft, uvTopRight];
          break;
        case 180:
          // Rotate 180 degrees: swap opposite corners
          [uvBottomLeft, uvTopRight] = [uvTopRight, uvBottomLeft];
          [uvBottomRight, uvTopLeft] = [uvTopLeft, uvBottomRight];
          break;
        case 270:
          // Rotate 270 degrees counter-clockwise (or 90 clockwise)
          [uvBottomLeft, uvTopLeft, uvTopRight, uvBottomRight] = [uvTopLeft, uvTopRight, uvBottomRight, uvBottomLeft];
          break;
      }
    }

    // Add vertices and UVs for this face
    const baseIndex = vertices.length / 3;

    // Define face vertices based on face direction
    switch (faceName) {
      case 'east': // +X
        vertices.push(
          width / 2,
          -height / 2,
          -depth / 2, // bottom-left
          width / 2,
          -height / 2,
          depth / 2, // bottom-right
          width / 2,
          height / 2,
          depth / 2, // top-right
          width / 2,
          height / 2,
          -depth / 2 // top-left
        );
        break;
      case 'west': // -X
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2, // bottom-left
          -width / 2,
          -height / 2,
          -depth / 2, // bottom-right
          -width / 2,
          height / 2,
          -depth / 2, // top-right
          -width / 2,
          height / 2,
          depth / 2 // top-left
        );
        break;
      case 'up': // +Y
        vertices.push(
          -width / 2,
          height / 2,
          -depth / 2, // bottom-left
          width / 2,
          height / 2,
          -depth / 2, // bottom-right
          width / 2,
          height / 2,
          depth / 2, // top-right
          -width / 2,
          height / 2,
          depth / 2 // top-left
        );
        break;
      case 'down': // -Y
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2, // bottom-left
          width / 2,
          -height / 2,
          depth / 2, // bottom-right
          width / 2,
          -height / 2,
          -depth / 2, // top-right
          -width / 2,
          -height / 2,
          -depth / 2 // top-left
        );
        break;
      case 'south': // +Z
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2, // bottom-left
          width / 2,
          -height / 2,
          depth / 2, // bottom-right
          width / 2,
          height / 2,
          depth / 2, // top-right
          -width / 2,
          height / 2,
          depth / 2 // top-left
        );
        break;
      case 'north': // -Z
        vertices.push(
          width / 2,
          -height / 2,
          -depth / 2, // bottom-left
          -width / 2,
          -height / 2,
          -depth / 2, // bottom-right
          -width / 2,
          height / 2,
          -depth / 2, // top-right
          width / 2,
          height / 2,
          -depth / 2 // top-left
        );
        break;
    }

    // Add UVs for this face with rotation applied
    uvs.push(
      uvBottomLeft[0],
      uvBottomLeft[1], // bottom-left
      uvBottomRight[0],
      uvBottomRight[1], // bottom-right
      uvTopRight[0],
      uvTopRight[1], // top-right
      uvTopLeft[0],
      uvTopLeft[1] // top-left
    );

    // Add indices for two triangles
    indices.push(
      baseIndex,
      baseIndex + 1,
      baseIndex + 2, // First triangle
      baseIndex,
      baseIndex + 2,
      baseIndex + 3 // Second triangle
    );

    // Track which material this face uses
    materialIndices.push(faceIndex, faceIndex);

    materials.push(
      new THREE.MeshLambertMaterial({
        map: faceTexture,
        transparent: true,
        alphaTest: 0.1,
        side: THREE.DoubleSide
      })
    );
  }

  // Set geometry attributes
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  // Add material groups for multi-material support
  let indexOffset = 0;
  for (let i = 0; i < materials.length; i++) {
    geometry.addGroup(indexOffset, 6, i); // 6 indices per face (2 triangles)
    indexOffset += 6;
  }

  geometry.computeVertexNormals();

  const mesh = new THREE.Mesh(geometry, materials);

  // Position the mesh at its center
  const centerX = (from[0] + to[0]) / 32;
  const centerY = (from[1] + to[1]) / 32;
  const centerZ = (from[2] + to[2]) / 32;

  if (element.rotation) {
    const rot = element.rotation;
    const origin = rot.origin.map((v) => v / 16);
    const angle = (rot.angle * Math.PI) / 180;

    // Create a rotation matrix
    const matrix = new THREE.Matrix4();

    // Translate to rotation origin
    matrix.makeTranslation(-origin[0], -origin[1], -origin[2]);

    // Apply rotation
    const rotMatrix = new THREE.Matrix4();
    if (rot.axis === 'x') rotMatrix.makeRotationX(angle);
    else if (rot.axis === 'y') rotMatrix.makeRotationY(angle);
    else if (rot.axis === 'z') rotMatrix.makeRotationZ(angle);
    matrix.premultiply(rotMatrix);

    // Translate back from rotation origin
    const translateBack = new THREE.Matrix4();
    translateBack.makeTranslation(origin[0], origin[1], origin[2]);
    matrix.premultiply(translateBack);

    // Apply the transformation to position
    const position = new THREE.Vector3(centerX, centerY, centerZ);
    position.applyMatrix4(matrix);
    mesh.position.copy(position);

    // Apply rotation to mesh
    mesh.setRotationFromMatrix(rotMatrix);
  } else {
    mesh.position.set(centerX, centerY, centerZ);
  }

  return mesh;
}

/**
 * Renders a block and returns a base64 data URL for inline use
 * @param blockId - Block identifier (e.g., "minecraft:stone" or "minecolonies:barrel")
 * @param options - Render options including version, dimensions, camera angle, and rotation
 * @returns Base64 data URL (e.g., "data:image/png;base64,...")
 */
export async function renderBlockDataUrl(blockId: string, options: RenderBlockOptions): Promise<string> {
  const targetWidth = options.width || 512;
  const targetHeight = options.height || 512;

  // Render at 3x resolution for better antialiasing
  const renderScale = 3;
  const width = targetWidth * renderScale;
  const height = targetHeight * renderScale;

  // Create headless WebGL context
  const glContext = gl(width, height, {
    preserveDrawingBuffer: true,
    alpha: true,
    antialias: true
  });

  // Create a minimal canvas mock for Three.js
  const mockCanvas = {
    width,
    height,
    style: {},
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  const renderer = new THREE.WebGLRenderer({
    canvas: mockCanvas as unknown as HTMLCanvasElement,
    antialias: true,
    powerPreference: 'high-performance',
    context: glContext,
    alpha: true
  });

  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0); // Transparent background

  // Set up scene
  const scene = new THREE.Scene();
  scene.background = null; // Transparent background

  // Add lighting to mimic Minecraft noon sunlight
  // Lower ambient light to allow stronger directional shading
  scene.add(new THREE.AmbientLight(0xffffff, 0.45));

  // Main directional light from above (like noon sun) - stronger for clear shading
  const sunLight = new THREE.DirectionalLight(0xffffff, 0.6);
  sunLight.position.set(0, 10, 0); // Directly from above
  scene.add(sunLight);

  // Subtle fill light from the front-side to prevent pure black shadows
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.15);
  fillLight.position.set(2, 2, 2);
  scene.add(fillLight);

  // Load minecraft assets and model
  const minecraftAssets = mcAssets(options.version.id);
  const modelCache = new Map<string, BlockModel>();
  const textureCache = new Map<string, THREE.Texture>();

  const model = await loadModelById(blockId, MODELS_PATH, minecraftAssets, modelCache);

  // Create a group to hold all meshes
  const modelGroup = new THREE.Group();

  // Handle Forge composite models (with children) and regular models
  // When a model has children, only render the children (root elements are for item rendering)
  if (model.children) {
    // Forge composite loader - process each child
    for (const childModel of Object.values(model.children)) {
      if (childModel.elements) {
        const childTextures = { ...model.textures, ...childModel.textures };
        for (const element of childModel.elements) {
          const mesh = await createMesh(element, childTextures, TEXTURES_PATH, minecraftAssets, textureCache);
          modelGroup.add(mesh);
        }
      }
    }
  } else if (model.elements) {
    // Regular model - process elements directly
    for (const element of model.elements) {
      const mesh = await createMesh(element, model.textures || {}, TEXTURES_PATH, minecraftAssets, textureCache);
      modelGroup.add(mesh);
    }
  }

  // Ensure we have at least some meshes to render
  if (modelGroup.children.length === 0) {
    throw new Error(`Model ${blockId} has no elements to render`);
  }

  // Add the group to the scene first
  scene.add(modelGroup);

  // Calculate the bounding box center of the unrotated model
  const prRotationBox = new THREE.Box3().setFromObject(modelGroup);
  const modelCenter = prRotationBox.getCenter(new THREE.Vector3());

  // Apply Y-axis rotation to the entire group if specified (0, 90, 180, 270 degrees)
  // Rotate around the model's center point
  if (options.rotation !== undefined && options.rotation !== 0) {
    const rotationRadians = (options.rotation * Math.PI) / 180;

    // Set the group's position to negative center (so center is at origin)
    modelGroup.position.set(-modelCenter.x, -modelCenter.y, -modelCenter.z);

    // Now rotate (rotates around origin, which is the model's center)
    modelGroup.rotation.y = rotationRadians;

    // Move back so the rotated center is at the original position
    const rotatedCenter = modelCenter.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationRadians);
    modelGroup.position.add(rotatedCenter);
  }

  // Calculate bounding sphere from the entire model group (after rotation is applied)
  // A sphere is view-angle independent, making camera framing reliable
  modelGroup.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(modelGroup);

  // Ensure we have a valid bounding box
  if (box.isEmpty()) {
    throw new Error(`No meshes found in model ${blockId}`);
  }

  // Get bounding sphere that encompasses the entire box
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);
  const center = sphere.center;
  const radius = sphere.radius;

  // Set up camera to view the entire model
  // Use narrower FOV for more isometric look (less perspective distortion)
  const fov = 35;
  const aspect = width / height;
  const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);

  // Calculate the direction vector based on angle
  const angle = options.angle || 'front';
  const direction =
    angle === 'front' ? new THREE.Vector3(2, 1.2, 1).normalize() : new THREE.Vector3(-2, 1.2, -1).normalize();

  // Calculate distance needed to fit the sphere in the viewport
  // The sphere projects to a circle in screen space
  const fovRadians = (fov * Math.PI) / 180;
  const tanHalfFov = Math.tan(fovRadians / 2);

  // Distance needed so sphere fits in vertical dimension
  const distanceY = radius / tanHalfFov;

  // Distance needed so sphere fits in horizontal dimension
  const distanceX = radius / (tanHalfFov * aspect);

  // Use the larger distance to ensure sphere fits in both dimensions
  const distance = Math.max(distanceX, distanceY);

  // Set final camera position looking at the bounding box center
  camera.position.copy(center).add(direction.clone().multiplyScalar(distance));
  camera.lookAt(center);
  camera.updateMatrixWorld();
  camera.updateProjectionMatrix();

  // Render scene
  renderer.render(scene, camera);

  // Read pixels from GL context
  const frameBufferPixels = new Uint8Array(width * height * 4);
  glContext.readPixels(0, 0, width, height, glContext.RGBA, glContext.UNSIGNED_BYTE, frameBufferPixels);

  // Flip image vertically (framebuffer origin is bottom-left, images are top-left)
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(width, height);

  for (let fbRow = 0; fbRow < height; fbRow++) {
    const rowData = frameBufferPixels.subarray(fbRow * width * 4, (fbRow + 1) * width * 4);
    const imgRow = height - fbRow - 1;
    imageData.data.set(rowData, imgRow * width * 4);
  }

  ctx.putImageData(imageData, 0, 0);

  // Find the bounding box of non-transparent/non-black pixels
  let cropMinX = width;
  let cropMinY = height;
  let cropMaxX = 0;
  let cropMaxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];

      // Check if pixel is not black (allowing for some tolerance)
      if (r > 5 || g > 5 || b > 5) {
        cropMinX = Math.min(cropMinX, x);
        cropMinY = Math.min(cropMinY, y);
        cropMaxX = Math.max(cropMaxX, x);
        cropMaxY = Math.max(cropMaxY, y);
      }
    }
  }

  // If we found content, crop and scale it to fill the entire canvas
  if (cropMaxX > cropMinX && cropMaxY > cropMinY) {
    const cropWidth = cropMaxX - cropMinX + 1;
    const cropHeight = cropMaxY - cropMinY + 1;

    // Create a new canvas with the cropped content
    const croppedCanvas = createCanvas(cropWidth, cropHeight);
    const croppedCtx = croppedCanvas.getContext('2d');
    croppedCtx.drawImage(canvas, cropMinX, cropMinY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

    // Scale to fill the entire canvas while maintaining aspect ratio
    const finalCanvas = createCanvas(width, height);
    const finalCtx = finalCanvas.getContext('2d');
    finalCtx.clearRect(0, 0, width, height);

    // Calculate scale to fit (contain) within canvas while maintaining aspect ratio
    const scaleX = width / cropWidth;
    const scaleY = height / cropHeight;
    const scale = Math.min(scaleX, scaleY); // Use min to fit everything

    const scaledWidth = cropWidth * scale;
    const scaledHeight = cropHeight * scale;

    // Center the scaled image
    const offsetX = (width - scaledWidth) / 2;
    const offsetY = (height - scaledHeight) / 2;

    finalCtx.drawImage(croppedCanvas, 0, 0, cropWidth, cropHeight, offsetX, offsetY, scaledWidth, scaledHeight);

    // Downscale to target resolution for better antialiasing
    const downsampledCanvas = createCanvas(targetWidth, targetHeight);
    const downsampledCtx = downsampledCanvas.getContext('2d');
    downsampledCtx.drawImage(finalCanvas, 0, 0, width, height, 0, 0, targetWidth, targetHeight);

    // Cleanup
    textureCache.forEach((t) => t.dispose());

    try {
      renderer.dispose();
    } catch {
      // Ignore disposal errors in headless mode
    }

    const buffer = downsampledCanvas.toBuffer('image/png');
    const base64 = buffer.toString('base64');
    return `data:image/png;base64,${base64}`;
  }

  // Fallback: no cropping needed
  const downsampledCanvas = createCanvas(targetWidth, targetHeight);
  const downsampledCtx = downsampledCanvas.getContext('2d');
  downsampledCtx.drawImage(canvas, 0, 0, width, height, 0, 0, targetWidth, targetHeight);

  // Cleanup
  textureCache.forEach((t) => t.dispose());

  try {
    renderer.dispose();
  } catch {
    // Ignore disposal errors in headless mode
  }

  const buffer = downsampledCanvas.toBuffer('image/png');
  const base64 = buffer.toString('base64');
  return `data:image/png;base64,${base64}`;
}
