/**
 * 3D Block Model Renderer
 */

import type { CollectionEntry } from 'astro:content';
import { createCanvas } from 'canvas';
import gl from 'gl';
import type { BlockModel, ModelElement } from 'minecraft-assets';
import * as THREE from 'three';

import { getAssetLoader, getAssetPaths, parseItemId, type RenderBlockOptions, toResourceLocation } from './common';

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
  version: CollectionEntry<'versions'>,
  modelCache: Map<string, BlockModel>
): Promise<BlockModel> {
  const cached = modelCache.get(blockId);
  if (cached) {
    return cached;
  }

  const { namespace, path: blockPath } = parseItemId(blockId);
  const loader = getAssetLoader(namespace);

  let model = await loader.loadBlockModel(blockPath, version, namespace);

  if (model.parent) {
    try {
      const parentId = toResourceLocation(model.parent);
      const parentModel = await loadModelById(parentId, modelsPath, version, modelCache);
      model = mergeModels(parentModel, model);
    } catch {
      // Parent not found - continue if model has elements defined
    }
  }

  modelCache.set(blockId, model);
  return model;
}

async function loadTexture(
  textureId: string,
  texturesPath: string,
  version: CollectionEntry<'versions'>,
  textureCache: Map<string, THREE.Texture>
): Promise<THREE.Texture> {
  const cached = textureCache.get(textureId);
  if (cached) {
    return cached;
  }

  const { namespace, path: texturePath } = parseItemId(textureId);
  const loader = getAssetLoader(namespace);

  const texture = await loader.loadTexture(texturePath, texturesPath, version, namespace);

  textureCache.set(textureId, texture);
  return texture;
}

function resolveTexture(textureRef: string, textures: Record<string, string>): string {
  if (!textureRef.startsWith('#')) {
    return textureRef;
  }

  const key = textureRef.substring(1);
  const resolved = textures[key];

  if (!resolved) {
    return textureRef;
  }

  return resolveTexture(resolved, textures);
}

async function createMesh(
  element: ModelElement,
  textures: Record<string, string>,
  texturesPath: string,
  version: CollectionEntry<'versions'>,
  textureCache: Map<string, THREE.Texture>
): Promise<THREE.Mesh> {
  const from = element.from;
  const to = element.to;

  const width = (to[0] - from[0]) / 16;
  const height = (to[1] - from[1]) / 16;
  const depth = (to[2] - from[2]) / 16;

  const materials: THREE.Material[] = [];
  const faceOrder = ['east', 'west', 'up', 'down', 'south', 'north'];

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
    const texture = await loadTexture(resolvedTexture, texturesPath, version, textureCache);
    const faceTexture = texture.clone();
    faceTexture.needsUpdate = true;

    let u1 = 0,
      v1 = 0,
      u2 = 1,
      v2 = 1;

    if (face.uv) {
      const uv = face.uv;
      u1 = uv[0] / 16;
      v1 = 1 - uv[3] / 16;
      u2 = uv[2] / 16;
      v2 = 1 - uv[1] / 16;
    }

    let uvBottomLeft = [u1, v1];
    let uvBottomRight = [u2, v1];
    let uvTopRight = [u2, v2];
    let uvTopLeft = [u1, v2];

    if (face.rotation) {
      switch (face.rotation) {
        case 90:
          [uvBottomLeft, uvTopLeft, uvTopRight, uvBottomRight] = [uvBottomRight, uvBottomLeft, uvTopLeft, uvTopRight];
          break;
        case 180:
          [uvBottomLeft, uvTopRight] = [uvTopRight, uvBottomLeft];
          [uvBottomRight, uvTopLeft] = [uvTopLeft, uvBottomRight];
          break;
        case 270:
          [uvBottomLeft, uvTopLeft, uvTopRight, uvBottomRight] = [uvTopLeft, uvTopRight, uvBottomRight, uvBottomLeft];
          break;
      }
    }

    const baseIndex = vertices.length / 3;

    switch (faceName) {
      case 'east':
        vertices.push(
          width / 2,
          -height / 2,
          -depth / 2,
          width / 2,
          -height / 2,
          depth / 2,
          width / 2,
          height / 2,
          depth / 2,
          width / 2,
          height / 2,
          -depth / 2
        );
        break;
      case 'west':
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2,
          -width / 2,
          -height / 2,
          -depth / 2,
          -width / 2,
          height / 2,
          -depth / 2,
          -width / 2,
          height / 2,
          depth / 2
        );
        break;
      case 'up':
        vertices.push(
          -width / 2,
          height / 2,
          -depth / 2,
          width / 2,
          height / 2,
          -depth / 2,
          width / 2,
          height / 2,
          depth / 2,
          -width / 2,
          height / 2,
          depth / 2
        );
        break;
      case 'down':
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2,
          width / 2,
          -height / 2,
          depth / 2,
          width / 2,
          -height / 2,
          -depth / 2,
          -width / 2,
          -height / 2,
          -depth / 2
        );
        break;
      case 'south':
        vertices.push(
          -width / 2,
          -height / 2,
          depth / 2,
          width / 2,
          -height / 2,
          depth / 2,
          width / 2,
          height / 2,
          depth / 2,
          -width / 2,
          height / 2,
          depth / 2
        );
        break;
      case 'north':
        vertices.push(
          width / 2,
          -height / 2,
          -depth / 2,
          -width / 2,
          -height / 2,
          -depth / 2,
          -width / 2,
          height / 2,
          -depth / 2,
          width / 2,
          height / 2,
          -depth / 2
        );
        break;
    }

    uvs.push(
      uvBottomLeft[0],
      uvBottomLeft[1],
      uvBottomRight[0],
      uvBottomRight[1],
      uvTopRight[0],
      uvTopRight[1],
      uvTopLeft[0],
      uvTopLeft[1]
    );

    indices.push(baseIndex, baseIndex + 1, baseIndex + 2, baseIndex, baseIndex + 2, baseIndex + 3);

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

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  let indexOffset = 0;
  for (let i = 0; i < materials.length; i++) {
    geometry.addGroup(indexOffset, 6, i);
    indexOffset += 6;
  }

  geometry.computeVertexNormals();

  const mesh = new THREE.Mesh(geometry, materials);

  const centerX = (from[0] + to[0]) / 32;
  const centerY = (from[1] + to[1]) / 32;
  const centerZ = (from[2] + to[2]) / 32;

  if (element.rotation) {
    const rot = element.rotation;
    const origin = rot.origin.map((v) => v / 16);
    const angle = (rot.angle * Math.PI) / 180;

    const matrix = new THREE.Matrix4();
    matrix.makeTranslation(-origin[0], -origin[1], -origin[2]);

    const rotMatrix = new THREE.Matrix4();
    if (rot.axis === 'x') {
      rotMatrix.makeRotationX(angle);
    } else if (rot.axis === 'y') {
      rotMatrix.makeRotationY(angle);
    } else if (rot.axis === 'z') {
      rotMatrix.makeRotationZ(angle);
    }
    matrix.premultiply(rotMatrix);

    const translateBack = new THREE.Matrix4();
    translateBack.makeTranslation(origin[0], origin[1], origin[2]);
    matrix.premultiply(translateBack);

    const position = new THREE.Vector3(centerX, centerY, centerZ);
    position.applyMatrix4(matrix);
    mesh.position.copy(position);

    mesh.setRotationFromMatrix(rotMatrix);
  } else {
    mesh.position.set(centerX, centerY, centerZ);
  }

  return mesh;
}

export async function renderBlockBuffer(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: RenderBlockOptions
): Promise<Buffer | undefined> {
  const errors: { text: string; error?: unknown }[] = [];

  const targetWidth = options?.width || 512;
  const targetHeight = options?.height || 512;

  const modelNamespace = item.data.modelNamespace || item.data.baseId.split('/')[0];
  const modelId = item.data.modelPath ? `${modelNamespace}/${item.data.modelPath}` : item.data.baseId;
  const blockId = toResourceLocation(modelId);
  const { namespace } = parseItemId(blockId);

  const renderScale = 3;
  const width = targetWidth * renderScale;
  const height = targetHeight * renderScale;

  const glContext = gl(width, height, {
    preserveDrawingBuffer: true,
    alpha: true,
    antialias: true
  });

  const mockCanvas = {
    width,
    height,
    style: {},
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  const originalWarn = console.warn;
  console.warn = () => {};

  const renderer = new THREE.WebGLRenderer({
    canvas: mockCanvas as unknown as HTMLCanvasElement,
    antialias: true,
    powerPreference: 'high-performance',
    context: glContext,
    alpha: true
  });

  console.warn = originalWarn;

  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.background = null;

  scene.add(new THREE.AmbientLight(0xffffff, 0.45));

  const sunLight = new THREE.DirectionalLight(0xffffff, 0.6);
  sunLight.position.set(0, 10, 0);
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.15);
  fillLight.position.set(2, 2, 2);
  scene.add(fillLight);

  const modelCache = new Map<string, BlockModel>();
  const textureCache = new Map<string, THREE.Texture>();

  const assetPaths = getAssetPaths(version, namespace);

  for (const assetPath of assetPaths) {
    try {
      const model = await loadModelById(blockId, assetPath, version, modelCache);

      const modelGroup = new THREE.Group();

      if (model.children) {
        for (const childModel of Object.values(model.children)) {
          if (childModel.elements) {
            const childTextures = { ...model.textures, ...childModel.textures };
            for (const element of childModel.elements) {
              const mesh = await createMesh(element, childTextures, assetPath, version, textureCache);
              modelGroup.add(mesh);
            }
          }
        }
      } else if (model.elements) {
        for (const element of model.elements) {
          const mesh = await createMesh(element, model.textures || {}, assetPath, version, textureCache);
          modelGroup.add(mesh);
        }
      }

      if (modelGroup.children.length === 0) {
        errors.push({ text: `Model ${blockId} has no elements to render` });
        continue;
      }

      scene.add(modelGroup);

      const prRotationBox = new THREE.Box3().setFromObject(modelGroup);
      const modelCenter = prRotationBox.getCenter(new THREE.Vector3());

      if (options?.rotation !== undefined && options.rotation !== 0) {
        const rotationRadians = (options.rotation * Math.PI) / 180;

        modelGroup.position.set(-modelCenter.x, -modelCenter.y, -modelCenter.z);
        modelGroup.rotation.y = rotationRadians;

        const rotatedCenter = modelCenter.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationRadians);
        modelGroup.position.add(rotatedCenter);
      }

      modelGroup.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(modelGroup);

      if (box.isEmpty()) {
        errors.push({ text: `No meshes found in model ${blockId}` });
        continue;
      }

      const sphere = new THREE.Sphere();
      box.getBoundingSphere(sphere);
      const center = sphere.center;
      const radius = sphere.radius;

      const fov = 35;
      const aspect = width / height;
      const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);

      const angle = options?.angle || 'front';
      const direction =
        angle === 'front' ? new THREE.Vector3(2, 1.2, 1).normalize() : new THREE.Vector3(-2, 1.2, -1).normalize();

      const fovRadians = (fov * Math.PI) / 180;
      const tanHalfFov = Math.tan(fovRadians / 2);

      const distanceY = radius / tanHalfFov;
      const distanceX = radius / (tanHalfFov * aspect);
      const distance = Math.max(distanceX, distanceY);

      camera.position.copy(center).add(direction.clone().multiplyScalar(distance));
      camera.lookAt(center);
      camera.updateMatrixWorld();
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);

      const frameBufferPixels = new Uint8Array(width * height * 4);
      glContext.readPixels(0, 0, width, height, glContext.RGBA, glContext.UNSIGNED_BYTE, frameBufferPixels);

      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext('2d');
      const imageData = ctx.createImageData(width, height);

      for (let fbRow = 0; fbRow < height; fbRow++) {
        const rowData = frameBufferPixels.subarray(fbRow * width * 4, (fbRow + 1) * width * 4);
        const imgRow = height - fbRow - 1;
        imageData.data.set(rowData, imgRow * width * 4);
      }

      ctx.putImageData(imageData, 0, 0);

      let cropMinX = width;
      let cropMinY = height;
      let cropMaxX = 0;
      let cropMaxY = 0;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          const alpha = imageData.data[idx + 3];

          if (alpha > 5) {
            cropMinX = Math.min(cropMinX, x);
            cropMinY = Math.min(cropMinY, y);
            cropMaxX = Math.max(cropMaxX, x);
            cropMaxY = Math.max(cropMaxY, y);
          }
        }
      }

      if (cropMaxX > cropMinX && cropMaxY > cropMinY) {
        const cropWidth = cropMaxX - cropMinX + 1;
        const cropHeight = cropMaxY - cropMinY + 1;

        const croppedCanvas = createCanvas(cropWidth, cropHeight);
        const croppedCtx = croppedCanvas.getContext('2d');
        croppedCtx.drawImage(canvas, cropMinX, cropMinY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

        const scaleX = targetWidth / cropWidth;
        const scaleY = targetHeight / cropHeight;
        const scale = Math.min(scaleX, scaleY);

        const scaledWidth = Math.round(cropWidth * scale);
        const scaledHeight = Math.round(cropHeight * scale);

        const downsampledCanvas = createCanvas(targetWidth, targetHeight);
        const downsampledCtx = downsampledCanvas.getContext('2d');

        const offsetX = Math.round((targetWidth - scaledWidth) / 2);
        const offsetY = Math.round((targetHeight - scaledHeight) / 2);

        downsampledCtx.drawImage(
          croppedCanvas,
          0,
          0,
          cropWidth,
          cropHeight,
          offsetX,
          offsetY,
          scaledWidth,
          scaledHeight
        );

        textureCache.forEach((t) => t.dispose());

        try {
          renderer.dispose();
        } catch {
          // Ignore disposal errors in headless mode
        }

        const buffer = downsampledCanvas.toBuffer('image/png');
        return buffer;
      }

      const downsampledCanvas = createCanvas(targetWidth, targetHeight);
      const downsampledCtx = downsampledCanvas.getContext('2d');
      downsampledCtx.drawImage(canvas, 0, 0, width, height, 0, 0, targetWidth, targetHeight);

      textureCache.forEach((t) => t.dispose());

      try {
        renderer.dispose();
      } catch {
        // Ignore disposal errors in headless mode
      }

      const buffer = downsampledCanvas.toBuffer('image/png');
      return buffer;
    } catch (error) {
      errors.push({ text: `Failed to render block ${item.data.baseId} for version ${version.id}:`, error });
      continue;
    }
  }

  errors.forEach((error) => console.warn(error.text, error.error));

  return undefined;
}

export async function renderBlockDataUrl(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: RenderBlockOptions
): Promise<string | undefined> {
  const buffer = await renderBlockBuffer(item, version, options);
  if (!buffer) {
    return undefined;
  }

  const base64 = buffer.toString('base64');
  return `data:image/png;base64,${base64}`;
}
