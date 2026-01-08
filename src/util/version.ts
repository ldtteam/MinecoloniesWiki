import { type CollectionEntry, type CollectionKey, type DataEntryMap, getCollection, getEntry, z } from 'astro:content';
import type { versionedObjectSchema } from 'src/schemas/version';

import { isFullEntry, type PartialCollectionEntry } from './util';

export interface DataForVersions<T> {
  value: T;
  versions: CollectionEntry<'versions'>[];
}

export interface VersionedResult<T> {
  highestValue: T;
  values: DataForVersions<T>[];
}

export type CollectionKeyWithVersion = {
  [K in CollectionKey]: DataEntryMap[K][string]['data'] extends z.infer<typeof versionedObjectSchema> ? K : never;
}[CollectionKey];

export async function isVersionHigherOrSame(
  version1: PartialCollectionEntry<'versions'>,
  version2: PartialCollectionEntry<'versions'>
) {
  const version1Data = isFullEntry(version1) ? version1 : await getEntry(version1);
  const version2Data = isFullEntry(version2) ? version2 : await getEntry(version2);

  return version1Data.data.order >= version2Data.data.order;
}

export async function getSortedVersions(): Promise<CollectionEntry<'versions'>[]> {
  const versions = await getCollection('versions');
  return versions.sort((a, b) => b.data.order - a.data.order);
}

export async function getNewestVersion(): Promise<CollectionEntry<'versions'>> {
  const results = (await getSortedVersions()).filter((f) => f.data.supported);
  return results[0];
}

export function getVersionCollectionId(id: string, version: number | CollectionEntry<'versions'>['data']) {
  return typeof version === 'number' ? `${version}_${id}` : `${version.order}_${id}`;
}

export async function getVersionedEntry<C extends CollectionKeyWithVersion>(
  collection: C,
  version: PartialCollectionEntry<'versions'>,
  id: string
) {
  const versionData = isFullEntry(version) ? version : await getEntry(version);
  return getEntry(collection, getVersionCollectionId(id, versionData.data));
}
