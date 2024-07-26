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

export async function getNewestVersion(): Promise<CollectionEntry<'versions'>> {
  const results = await getSortedVersions();
  return results[0];
}

interface VersionedItem<T> {
  item: T;
  versions: CollectionEntry<'versions'>[];
}

type VersionedItems<T> = VersionedItem<T>[];

export interface VersionObjectEntry<T> {
  version: CollectionEntry<'versions'>;
  data: T;
}

/**
 * Groups data depending on a custom equality token. When data is considered equal, their versions are merged.
 * @param items the array of items.
 * @param getEqualityToken a function to return a hash of the object, used for checking equality
 * @returns
 */
export function groupDataByVersion<T>(items: VersionObjectEntry<T>[], getHash: (item: T) => string): VersionedItems<T> {
  const indexes = new Map<string, number>();
  return items.reduce<VersionedItems<T>>((prev, curr) => {
    const id = getHash(curr.data);
    if (!indexes.has(id)) {
      const index = prev.push({
        item: curr.data,
        versions: []
      });
      indexes.set(id, index - 1);
    }

    const index = indexes.get(id);
    if (index !== undefined) {
      prev[index].versions.push(curr.version);
    }
    return prev;
  }, []);
}
