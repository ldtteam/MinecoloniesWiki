import type { CollectionEntry, ReferenceDataEntry } from 'astro:content';
import path from 'path';

import { type CollectionKeyWithVersion, getVersionCollectionId } from './version';

const FOLDER_REGEX = /[\\/]/g;

export interface ResourceLocation {
  namespace: string;
  path: string;
}

export function parseResourceLocation(resloc: string): ResourceLocation {
  const parts = resloc.split(':');
  if (parts.length > 1) {
    return {
      namespace: parts[0],
      path: fixPath(parts.slice(1))
    };
  } else {
    return {
      namespace: 'minecraft',
      path: fixPath(parts[0])
    };
  }
}

export function parseResourceLocationFromRelativePath(file: string): ResourceLocation {
  const sections = file.split(FOLDER_REGEX);
  if (sections.length === 1) {
    return {
      namespace: 'minecraft',
      path: fixPath(sections[0])
    };
  } else {
    return {
      namespace: sections[0],
      path: fixPath(sections.slice(1))
    };
  }
}

export function parseResourceLocationFromAbsolutePath(base: string, file: string): ResourceLocation {
  return parseResourceLocationFromRelativePath(path.relative(base, file));
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

function fixPath(path: string | string[]) {
  if (Array.isArray(path)) {
    return fixPath(path.join('/'));
  } else {
    return path.replaceAll(FOLDER_REGEX, '/').replace(/\..+/, '');
  }
}
