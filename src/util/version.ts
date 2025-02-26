import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { isFullEntry, type PartialCollectionEntry } from './util';

export interface DataForVersions<T> {
  value: T;
  versions: CollectionEntry<'versions'>[];
}

export interface VersionedResult<T> {
  highestValue: T;
  values: DataForVersions<T>[];
}

export async function isVersionHigherOrSame(
  version1: PartialCollectionEntry<'versions'>,
  version2: PartialCollectionEntry<'versions'>
) {
  const version1Data = isFullEntry(version1) ? version1 : await getEntry(version1);
  const version2Data = isFullEntry(version2) ? version2 : await getEntry(version2);

  return version1Data.data.order >= version2Data.data.order;
}

export async function getVersionNumbers(
  version: CollectionEntry<'versions'>,
  before: boolean = false,
  after: boolean = false
): Promise<CollectionEntry<'versions'>[]> {
  const allVersions = await getCollection('versions');
  const allowedVersions: CollectionEntry<'versions'>[] = [];

  for (const nextVersion of allVersions) {
    if (version.data.order === nextVersion.data.order) {
      allowedVersions.push(nextVersion);
    }
    if (before && version.data.order > nextVersion.data.order) {
      allowedVersions.push(nextVersion);
    }
    if (after && version.data.order < nextVersion.data.order) {
      allowedVersions.push(nextVersion);
    }
  }

  return allowedVersions;
}

export async function getSortedVersions(): Promise<CollectionEntry<'versions'>[]> {
  const versions = await getCollection('versions');
  return versions.sort((a, b) => b.data.order - a.data.order);
}

export async function getNewestVersion(): Promise<CollectionEntry<'versions'>> {
  const results = (await getSortedVersions()).filter((f) => f.data.supported);
  return results[0];
}
