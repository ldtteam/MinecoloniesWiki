import type { CollectionEntry } from 'astro:content';

export type TypeDetail = CollectionEntry<'configuration'>['data']['types'][number];
