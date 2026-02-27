import type { CollectionEntry } from 'astro:content';

export type ResearchWithChildren = CollectionEntry<'research'> & {
  children: ResearchWithChildren[];
};
