import { getEntry } from 'astro:content';

import type { PartialCollectionEntry } from './util';

export async function getResearchId(research: PartialCollectionEntry<'research'>) {
  const fullResearch = await getEntry(research);
  const version = await getEntry(fullResearch.data.version);
  return `research_${research.id}_${version.data.order}_list`;
}
