import type { CollectionEntry, CollectionKey } from 'astro:content';

export type EventRelative = 'start' | 'end' | undefined;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type PartialCollectionEntry<C extends CollectionKey> =
  | CollectionEntry<C>
  | {
      collection: C;
      id: string;
    };

export function isFullEntry<C extends CollectionKey>(entry: PartialCollectionEntry<C>): entry is CollectionEntry<C> {
  return 'data' in entry;
}

export function isCollectionEntry<C extends CollectionKey>(
  entry: PartialCollectionEntry<CollectionKey>,
  collection: C
): entry is PartialCollectionEntry<C> {
  return entry.collection === collection;
}
