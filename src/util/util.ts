import type { CollectionEntry, InferEntrySchema } from 'astro:content';

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type EventRelative = 'start' | 'end' | undefined;

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
