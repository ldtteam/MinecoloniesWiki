import type { CollectionEntry } from 'astro:content';
import { createCanvas, Image } from 'canvas';

import { getAssetLoader, parseItemId, toResourceLocation } from './common';

async function renderTextureToBuffer(textureData: Buffer, width: number, height: number): Promise<Buffer> {
  const img = new Image();
  img.src = textureData;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toBuffer('image/png');
}

export async function renderItemDataUrl(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: { width?: number; height?: number }
): Promise<string | undefined> {
  const buffer = await renderItemBuffer(item, version, options);
  if (!buffer) {
    return undefined;
  }

  const base64 = buffer.toString('base64');
  return `data:image/png;base64,${base64}`;
}

export async function renderItemBuffer(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: { width?: number; height?: number }
): Promise<Buffer | undefined> {
  const errors: { text: string; error?: unknown }[] = [];

  const targetWidth = options?.width || 100;
  const targetHeight = options?.height || 100;

  const modelNamespace = item.data.modelNamespace || item.data.baseId.split('/')[0];
  const modelId = item.data.modelPath ? `${modelNamespace}/${item.data.modelPath}` : item.data.baseId;
  const itemId = toResourceLocation(modelId);
  const { namespace, path: itemPath } = parseItemId(itemId);

  const loader = getAssetLoader(namespace);
  let textureData: Buffer | undefined;

  try {
    textureData = await loader.loadItemTexture(itemPath, version, namespace);
  } catch (error) {
    errors.push({ text: `Failed to load texture for ${item.data.baseId}:`, error });
    errors.forEach((err) => console.warn(err.text, err.error));
    return undefined;
  }

  return await renderTextureToBuffer(textureData, targetWidth, targetHeight);
}
