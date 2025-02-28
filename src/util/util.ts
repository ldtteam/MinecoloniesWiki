import type { CollectionEntry, CollectionKey, ReferenceDataEntry } from 'astro:content';

export type EventRelative = 'start' | 'end' | undefined;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type PartialCollectionEntry<C extends CollectionKey> = CollectionEntry<C> | ReferenceDataEntry<C>;

export function isFullEntry<C extends CollectionKey>(entry: PartialCollectionEntry<C>): entry is CollectionEntry<C> {
  return 'data' in entry;
}

export function isUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
