import type { CollectionEntry } from 'astro:content';
import type { Canvas } from 'canvas';
import { createCanvas, Image } from 'canvas';
import fs from 'fs/promises';
import type { BlockModel, BlockState, BlockStateVariant } from 'minecraft-assets';
import mcAssets from 'minecraft-assets';
import path from 'path';
import * as THREE from 'three';

import { parseResourceLocation, type ResourceLocation } from '../resourcelocation';

// ============================================================================
// Types and Interfaces
// ============================================================================

export type CameraAngle = 'front' | 'back';

export type BlockStateInput = Record<string, string>;

export interface ResolvedModel {
  modelId: string;
  x?: number;
  y?: number;
  uvlock?: boolean;
}

export interface RenderBlockOptions {
  width?: number;
  height?: number;
  angle?: CameraAngle;
  rotation?: number;
  blockState?: BlockStateInput;
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
// Blockstate Resolution
// ============================================================================

function parseBlockStateKey(key: string): BlockStateInput {
  if (key === '') {
    return {};
  }
  const result: BlockStateInput = {};
  for (const part of key.split(',')) {
    const [name, value] = part.split('=');
    if (name && value !== undefined) {
      result[name] = value;
    }
  }
  return result;
}

function blockStateMatches(pattern: BlockStateInput, input: BlockStateInput): boolean {
  for (const [key, value] of Object.entries(pattern)) {
    if (input[key] !== value) {
      return false;
    }
  }
  return true;
}

function selectVariant(variant: BlockStateVariant | BlockStateVariant[]): BlockStateVariant {
  if (Array.isArray(variant)) {
    const totalWeight = variant.reduce((sum, v) => sum + (v.weight ?? 1), 0);
    let random = Math.random() * totalWeight;
    for (const v of variant) {
      random -= v.weight ?? 1;
      if (random <= 0) {
        return v;
      }
    }
    return variant[0];
  }
  return variant;
}

function resolveVariantsBlockState(
  variants: Record<string, BlockStateVariant | BlockStateVariant[]>,
  inputState?: BlockStateInput,
  defaultModel?: string | null
): ResolvedModel {
  const keys = Object.keys(variants);

  if (!inputState || Object.keys(inputState).length === 0) {
    if (defaultModel) {
      return { modelId: defaultModel };
    }
    const firstVariant = selectVariant(variants[keys[0]]);
    return {
      modelId: firstVariant.model,
      x: firstVariant.x,
      y: firstVariant.y,
      uvlock: firstVariant.uvlock
    };
  }

  for (const key of keys) {
    const pattern = parseBlockStateKey(key);
    if (blockStateMatches(pattern, inputState)) {
      const variant = selectVariant(variants[key]);
      return {
        modelId: variant.model,
        x: variant.x,
        y: variant.y,
        uvlock: variant.uvlock
      };
    }
  }

  throw new Error(`No matching blockstate variant found for input: ${JSON.stringify(inputState)}`);
}

function matchesMultipartCondition(
  condition: Record<string, string | Record<string, string>[] | undefined>,
  inputState: BlockStateInput
): boolean {
  if (condition.OR && Array.isArray(condition.OR)) {
    return condition.OR.some((orCondition) => matchesMultipartCondition(orCondition, inputState));
  }

  for (const [key, value] of Object.entries(condition)) {
    if (key === 'OR') {
      continue;
    }
    if (typeof value !== 'string') {
      continue;
    }

    const allowedValues = value.split('|');
    const inputValue = inputState[key];
    if (!allowedValues.includes(inputValue ?? '')) {
      return false;
    }
  }
  return true;
}

function resolveMultipartBlockState(
  multipart: Array<{ apply: BlockStateVariant | BlockStateVariant[]; when?: Record<string, unknown> }>,
  inputState?: BlockStateInput
): ResolvedModel[] {
  const resolvedModels: ResolvedModel[] = [];
  const state = inputState ?? {};

  for (const part of multipart) {
    let shouldApply = true;

    if (part.when) {
      shouldApply = matchesMultipartCondition(
        part.when as Record<string, string | Record<string, string>[] | undefined>,
        state
      );
    }

    if (shouldApply) {
      const variant = selectVariant(part.apply);
      resolvedModels.push({
        modelId: variant.model,
        x: variant.x,
        y: variant.y,
        uvlock: variant.uvlock
      });
    }
  }

  if (resolvedModels.length === 0) {
    const firstVariant = selectVariant(multipart[0].apply);
    return [
      {
        modelId: firstVariant.model,
        x: firstVariant.x,
        y: firstVariant.y,
        uvlock: firstVariant.uvlock
      }
    ];
  }

  return resolvedModels;
}

export function resolveBlockState(
  blockState: BlockState,
  inputState?: BlockStateInput,
  defaultModel?: string | null
): ResolvedModel[] {
  if (blockState.variants) {
    return [resolveVariantsBlockState(blockState.variants, inputState, defaultModel)];
  }

  if (blockState.multipart) {
    return resolveMultipartBlockState(blockState.multipart, inputState);
  }

  throw new Error('Invalid blockstate: no variants or multipart defined');
}

// ============================================================================
// Asset Loaders
// ============================================================================

export interface AssetLoader {
  getDefaultModel: (blockPath: string, version: CollectionEntry<'versions'>, namespace: string) => string | null;
  loadBlockState: (
    blockPath: string,
    version: CollectionEntry<'versions'>,
    namespace: string
  ) => Promise<BlockState | null>;
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
  getDefaultModel(blockPath: string, version: CollectionEntry<'versions'>, _namespace: string): string | null {
    const minecraftAssets = mcAssets(version.id);
    const cleanPath = blockPath.replace(/^block\//, '');
    const blockData = minecraftAssets.blocks[cleanPath];
    if (!blockData?.model) {
      return null;
    }
    // Normalize format: minecraft:blocks/name -> minecraft:block/name
    return blockData.model.replace(':blocks/', ':block/');
  },

  async loadBlockState(
    blockPath: string,
    version: CollectionEntry<'versions'>,
    _namespace: string
  ): Promise<BlockState | null> {
    const minecraftAssets = mcAssets(version.id);
    const cleanPath = blockPath.replace(/^block\//, '');
    const blockState = minecraftAssets.blocksStates[cleanPath];
    return blockState ?? null;
  },

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
  getDefaultModel(_blockPath: string, _version: CollectionEntry<'versions'>, _namespace: string): string | null {
    // Mod assets don't have a default model registry like vanilla
    return null;
  },

  async loadBlockState(
    blockPath: string,
    version: CollectionEntry<'versions'>,
    namespace: string
  ): Promise<BlockState | null> {
    const assetPaths = getAssetPaths(version, namespace);
    const cleanPath = blockPath.replace(/^block\//, '');

    for (const assetPath of assetPaths) {
      try {
        const blockStatePath = path.join(assetPath, 'blockstates', `${cleanPath}.json`);
        const data = await fs.readFile(blockStatePath, 'utf-8');
        return JSON.parse(data);
      } catch {
        continue;
      }
    }

    return null;
  },

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
