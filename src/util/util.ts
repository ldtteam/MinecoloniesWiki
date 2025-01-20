import type { CollectionEntry, CollectionKey, InferEntrySchema } from 'astro:content';

export type EventRelative = 'start' | 'end' | undefined;

export type PartialCollectionEntry<C extends CollectionKey> =
  | CollectionEntry<C>
  | {
      collection: C;
      id: string;
    };

export function isFullEntry<C extends CollectionKey>(
  version: PartialCollectionEntry<C>
): version is CollectionEntry<C> {
  return 'data' in version;
}

type WikiPageType = InferEntrySchema<'wiki'>['type'];

export type WikiPageEntry<T extends WikiPageType> = Omit<CollectionEntry<'wiki'>, 'data'> & {
  data: Extract<CollectionEntry<'wiki'>['data'], { type: T }>;
};

export function isWikiPageOfType<T extends WikiPageType>(
  page: Omit<CollectionEntry<'wiki'>, 'id'> & { id: string },
  type: T
): page is WikiPageEntry<T> {
  return page.data.type === type;
}
