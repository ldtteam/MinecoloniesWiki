import type { CollectionEntry } from 'astro:content';

export type ResearchWithChildren = CollectionEntry<'research'>['data'] & {
  children: ResearchWithChildren[];
};
