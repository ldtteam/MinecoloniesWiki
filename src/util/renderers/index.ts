import type { CollectionEntry } from 'astro:content';

import { renderBlockBuffer, renderBlockDataUrl } from './block';
import type { RenderBlockOptions } from './common';
import { renderItemBuffer, renderItemDataUrl } from './item';

export { renderBlockBuffer, renderBlockDataUrl } from './block';
export type { CameraAngle, RenderBlockOptions } from './common';
export { renderItemBuffer, renderItemDataUrl } from './item';

export async function renderItemOrBlockDataUrl(
  item: CollectionEntry<'items'>,
  options?: RenderBlockOptions
): Promise<string | undefined> {
  if (item.data.isBlock) {
    return renderBlockDataUrl(item, options);
  } else {
    return renderItemDataUrl(item, options);
  }
}

export async function renderItemOrBlockBuffer(
  item: CollectionEntry<'items'>,
  options?: RenderBlockOptions
): Promise<Buffer | undefined> {
  if (item.data.isBlock) {
    return renderBlockBuffer(item, options);
  } else {
    return renderItemBuffer(item, options);
  }
}
