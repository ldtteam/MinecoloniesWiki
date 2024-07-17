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

interface TitleVersionEntry {
  title: string;
  version: CollectionEntry<'versions'>;
}

export interface TitleVersionItem {
  title: string;
  versions: CollectionEntry<'versions'>[];
}

export type TitleVersions = TitleVersionItem[];

export function combineVersionedTitles(array: TitleVersionEntry[]): TitleVersions {
  const cache: Record<string, number> = {};

  return array.reduce<TitleVersions>((prev, curr) => {
    if (cache[curr.title] === undefined) {
      const index = prev.push({
        title: curr.title,
        versions: []
      });
      cache[curr.title] = index - 1;
    }
    prev[cache[curr.title]].versions.push(curr.version);
    return prev;
  }, []);
}

type VersionedItems<T> = { item: T; versions: CollectionEntry<'versions'>[] }[];

export async function groupDataByVersion<T>(
  items: T[],
  versionGetter: (item: T) => CollectionEntry<'versions'>
): Promise<VersionedItems<T>> {
  const map = items.reduce((prev, curr) => {
    if (!prev.has(curr)) {
      prev.set(curr, []);
    }
    prev.get(curr)?.push(versionGetter(curr));
    return prev;
  }, new Map<T, CollectionEntry<'versions'>[]>());
  return Array.from(map.entries(), ([item, versions]) => ({
    item,
    versions
  }));
}
