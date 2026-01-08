import type { CollectionEntry } from 'astro:content';

import { renderBlockBuffer, renderBlockDataUrl } from './block';
import type { RenderBlockOptions } from './common';
import { renderItemBuffer, renderItemDataUrl } from './item';

export { renderBlockBuffer, renderBlockDataUrl } from './block';
export type { CameraAngle, RenderBlockOptions } from './common';
export { renderItemBuffer, renderItemDataUrl } from './item';

export async function renderItemOrBlockDataUrl(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: RenderBlockOptions
): Promise<string | undefined> {
  if (item.data.isBlock) {
    return renderBlockDataUrl(item, version, options);
  } else {
    return renderItemDataUrl(item, version, options);
  }
}

export async function renderItemOrBlockBuffer(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  options?: RenderBlockOptions
): Promise<Buffer | undefined> {
  if (item.data.isBlock) {
    return renderBlockBuffer(item, version, options);
  } else {
    return renderItemBuffer(item, version, options);
  }
}
