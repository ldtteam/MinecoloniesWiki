import { type CollectionEntry, getCollection } from 'astro:content';

import { groupDataByVersion, isVersionHigherOrSame } from './version';
import { type WikiPageData, type WikiPageEntry } from './wiki';

export interface MarkdocBuildingComponent {
  frontmatter: CollectionEntry<'wiki'>['data'];
  name?: string;
}

export async function groupBuildingDataByVersion(buildingData: WikiPageData<'building'>) {
  const versions = await getCollection('versions');
  return groupDataByVersion(
    await Promise.all(
      versions.map(async (version) => ({
        version,
        data: await getBuildingDataForVersion(buildingData, version)
      }))
    ),
    (item) => item.id
  );
}

export async function getBuildingDataForVersion(
  buildingData: WikiPageData<'building'>,
  version: CollectionEntry<'versions'>
): Promise<WikiPageData<'building'>> {
  if (!buildingData.overrides) {
    return buildingData;
  }

  let overrides: Partial<WikiPageEntry<'building'>['data']> | undefined = undefined;
  for (const versionData of buildingData.overrides) {
    if (!(await isVersionHigherOrSame(version, versionData.version.id))) {
      break;
    }

    overrides = versionData;
  }

  return {
    ...buildingData,
    ...overrides
  };
}
