import type { CollectionEntry } from 'astro:content';
import type { Canvas } from 'canvas';
import { createCanvas, Image } from 'canvas';
import fs from 'fs/promises';
import type { BlockModel } from 'minecraft-assets';
import mcAssets from 'minecraft-assets';
import path from 'path';
import * as THREE from 'three';

import { parseResourceLocation, type ResourceLocation } from '../resourcelocation';

// ============================================================================
// Types and Interfaces
// ============================================================================

export type CameraAngle = 'front' | 'back';

export interface RenderBlockOptions {
  width?: number;
  height?: number;
  angle?: CameraAngle;
  rotation?: number;
}

// ============================================================================
// Resource Location Utilities
// ============================================================================

export function toResourceLocation(itemId: string): string {
  if (itemId.includes(':')) {
    return itemId;
  }

  if (itemId.startsWith('block/') || itemId.startsWith('item/')) {
    return `minecraft:${itemId}`;
  }

  if (itemId.includes('/')) {
    return itemId.replace('/', ':');
  }

  return `minecraft:${itemId}`;
}

export function parseItemId(itemId: string): ResourceLocation {
  return parseResourceLocation(itemId);
}

export function getAssetPaths(version: CollectionEntry<'versions'>, namespace?: string): string[] {
  const submodule = version.data.submodule;
  const modName = namespace || 'minecolonies';
  return [
    `./submodules/${modName}-${submodule}/src/main/resources/assets/${modName}`,
    `./submodules/${modName}-${submodule}/src/datagen/generated/${modName}/assets/${modName}`
  ];
}

// ============================================================================
// Asset Loaders
// ============================================================================

export interface AssetLoader {
  loadBlockModel: (blockPath: string, version: CollectionEntry<'versions'>, namespace: string) => Promise<BlockModel>;
  loadItemTexture: (itemPath: string, version: CollectionEntry<'versions'>, namespace: string) => Promise<Buffer>;
  loadTexture: (
    texturePath: string,
    texturesPath: string,
    version: CollectionEntry<'versions'>,
    namespace: string
  ) => Promise<THREE.Texture>;
}

const vanillaAssetLoader: AssetLoader = {
  async loadBlockModel(
    blockPath: string,
    version: CollectionEntry<'versions'>,
    _namespace: string
  ): Promise<BlockModel> {
    const minecraftAssets = mcAssets(version.id);
    const cleanPath = blockPath.replace(/^block\//, '');
    const vanillaModel = minecraftAssets.blocksModels[cleanPath];
    if (!vanillaModel) {
      throw new Error(`Minecraft model not found: ${cleanPath}`);
    }
    return vanillaModel;
  },

  async loadItemTexture(itemPath: string, version: CollectionEntry<'versions'>, _namespace: string): Promise<Buffer> {
    const minecraftAssets = mcAssets(version.id);

    const texturePngPath = itemPath.includes('/')
      ? path.join(minecraftAssets.directory, `${itemPath}.png`)
      : path.join(minecraftAssets.directory, 'items', `${itemPath}.png`);

    return await fs.readFile(texturePngPath);
  },

  async loadTexture(
    texturePath: string,
    _texturesPath: string,
    version: CollectionEntry<'versions'>,
    _namespace: string
  ): Promise<THREE.Texture> {
    const minecraftAssets = mcAssets(version.id);
    let texturePngPath: string;

    if (texturePath.startsWith('item/')) {
      const cleanPath = texturePath.replace(/^item\//, '');
      texturePngPath = path.join(minecraftAssets.directory, 'items', `${cleanPath}.png`);
    } else if (texturePath.startsWith('block/')) {
      const cleanPath = texturePath.replace(/^block\//, '');
      texturePngPath = path.join(minecraftAssets.directory, 'blocks', `${cleanPath}.png`);
    } else if (texturePath.startsWith('entity/')) {
      const cleanPath = texturePath.replace(/^entity\//, '');
      texturePngPath = path.join(minecraftAssets.directory, 'entity', `${cleanPath}.png`);
    } else if (texturePath.startsWith('models/')) {
      texturePngPath = path.join(minecraftAssets.directory, `${texturePath}.png`);
    } else {
      texturePngPath = path.join(minecraftAssets.directory, 'blocks', `${texturePath}.png`);
    }

    const data = await fs.readFile(texturePngPath);
    const base64 = data.toString('base64');
    const canvas = await loadImageFromBase64(base64);
    return createTextureFromCanvas(canvas);
  }
};

const modAssetLoader: AssetLoader = {
  async loadBlockModel(
    blockPath: string,
    version: CollectionEntry<'versions'>,
    namespace: string
  ): Promise<BlockModel> {
    const assetPaths = getAssetPaths(version, namespace);
    const modelSubPath = blockPath.startsWith('block/') ? blockPath : `block/${blockPath}`;

    for (const assetPath of assetPaths) {
      try {
        const modelPath = path.join(assetPath, 'models', `${modelSubPath}.json`);
        const data = await fs.readFile(modelPath, 'utf-8');
        return JSON.parse(data);
      } catch {
        continue;
      }
    }

    throw new Error(`Block model not found: ${blockPath}`);
  },

  async loadItemTexture(itemPath: string, version: CollectionEntry<'versions'>, namespace: string): Promise<Buffer> {
    const texturePaths = getAssetPaths(version, namespace).map((assetPath) =>
      path.join(assetPath, 'textures', 'item', `${itemPath}.png`)
    );

    for (const texturePath of texturePaths) {
      try {
        return await fs.readFile(texturePath);
      } catch {
        continue;
      }
    }
    throw new Error(`Texture not found: ${itemPath}`);
  },

  async loadTexture(
    texturePath: string,
    texturesPath: string,
    _version: CollectionEntry<'versions'>,
    _namespace: string
  ): Promise<THREE.Texture> {
    const fullPath = path.join(texturesPath, 'textures', texturePath + '.png');
    const data = await fs.readFile(fullPath);
    const base64 = data.toString('base64');
    const canvas = await loadImageFromBase64(base64);
    return createTextureFromCanvas(canvas);
  }
};

const assetLoaders: Record<string, AssetLoader> = {
  minecraft: vanillaAssetLoader
};

export function getAssetLoader(namespace: string): AssetLoader {
  return assetLoaders[namespace] || modAssetLoader;
}

// ============================================================================
// Canvas and Texture Utilities
// ============================================================================

export function createTextureFromCanvas(canvas: Canvas): THREE.Texture {
  const texture = new THREE.CanvasTexture(canvas as unknown as HTMLCanvasElement);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}

export async function loadImageFromBase64(base64: string): Promise<Canvas> {
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
