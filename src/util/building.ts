import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { groupDataByVersion, isVersionHigherOrSame } from './version';
import { getWikiPage, type WikiPageEntry } from './wiki';

export interface MarkdocBuildingComponent {
  frontmatter?: CollectionEntry<'wiki'>['data'];
  name?: string;
}

/**
 * Obtain the building data based on the building key, if the building does not exist, throw an error.
 * @param building the building key.
 * @returns the building data.
 */
export async function getBuildingData(building: string) {
  const buildingData = await getWikiPage('building', 'buildings', building);
  if (buildingData === undefined) {
    throw Error(`Building entry "${building}" does not exist.`);
  }
  return buildingData;
}

export function getBuildingLink(building: CollectionEntry<'buildings'>) {
  return `/wiki/buildings/${building.id}`;
}

export async function groupBuildingDataByVersion(buildingData: CollectionEntry<'buildings'>) {
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
  buildingData: CollectionEntry<'buildings'>,
  version: CollectionEntry<'versions'>
): Promise<CollectionEntry<'buildings'>> {
  if (!buildingData.data.overrides) {
    return buildingData;
  }

  let overrides: Partial<CollectionEntry<'buildings'>['data']> | undefined = undefined;
  for (const versionData of buildingData.data.overrides) {
    if (!(await isVersionHigherOrSame(version, versionData.version.id))) {
      break;
    }

    overrides = versionData;
  }

  return {
    ...buildingData,
    data: {
      ...buildingData.data,
      ...overrides
    }
  };
}
