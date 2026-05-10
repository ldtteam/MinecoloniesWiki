import { type CollectionEntry, getEntries } from 'astro:content';

import type { RecipeItem } from '../schemas/item';

export type ResolvedItem = CollectionEntry<'items'>;

export async function resolveSlots(slots: (RecipeItem | undefined)[]): Promise<{
  frames: (ResolvedItem | undefined)[][];
  maxCount: number;
}> {
  const resolved = await Promise.all(slots.map((slot) => (slot ? getEntries(slot) : Promise.resolve([]))));

  const maxCount = resolved.reduce((max, items) => Math.max(max, items.length), 1);

  const frames = Array.from({ length: maxCount }, (_, i) =>
    resolved.map((items) => {
      if (items.length === 0) {
        return undefined;
      }
      return items[i % items.length];
    })
  );

  return { frames, maxCount };
}
