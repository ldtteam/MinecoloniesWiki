import type { CollectionEntry, ReferenceDataEntry } from 'astro:content';

import { type CollectionKeyWithVersion, getVersionCollectionId } from './version';

export interface ResourceLocation {
  namespace: string;
  path: string;
}

export function parseResourceLocation(resloc: string): ResourceLocation {
  const parts = resloc.split(':');
  if (parts.length > 1) {
    return {
      namespace: parts[0],
      path: parts.slice(1).join(':')
    };
  } else {
    return {
      namespace: 'minecraft',
      path: parts[0]
    };
  }
}

export function resourceLocationToWikiId(resloc: ResourceLocation): string {
  return resloc.namespace + '/' + resloc.path;
}

export function resourceLocationToWikiReference<C extends CollectionKeyWithVersion>(
  resloc: ResourceLocation,
  version: CollectionEntry<'versions'>['data'],
  collection: C
): ReferenceDataEntry<C> {
  return {
    id: getVersionCollectionId(resourceLocationToWikiId(resloc), version),
    collection
  };
}
