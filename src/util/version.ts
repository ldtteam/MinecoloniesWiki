import { type CollectionEntry, getCollection } from 'astro:content';

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
      allowedVersions.push(version);
    }
    if (after && version.data.order < nextVersion.data.order) {
      allowedVersions.push(version);
    }
  }

  return allowedVersions;
}
