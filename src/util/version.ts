import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

type VersionRef = CollectionEntry<'versions'> | CollectionEntry<'versions'>['id'];

export async function isVersionHigherOrSame(version1: VersionRef, version2: VersionRef) {
  const version1Data = typeof version1 === 'string' ? await getEntry('versions', version1) : version1;
  const version2Data = typeof version2 === 'string' ? await getEntry('versions', version2) : version2;

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

export function getNewestVersion(): Promise<CollectionEntry<'versions'>> {
  return getSortedVersions().then((results) => results[0]);
}
