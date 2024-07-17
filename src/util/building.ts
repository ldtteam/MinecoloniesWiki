import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { groupDataByVersion, isVersionHigherOrSame } from './version';

export interface MarkdocBuildingComponent {
  frontmatter?: CollectionEntry<'wiki'>['data'];
  name?: string;
}

export async function getBuildingIdFromFrontmatter(frontmatter: CollectionEntry<'wiki'>['data'] | undefined) {
  let buildingId: CollectionEntry<'buildings'>['id'] | undefined;
  if (frontmatter?.type === 'building') {
    buildingId = frontmatter.building.id;
  }
  return buildingId;
}

/**
 * Obtain the building data based on the building key, if the building does not exist, throw an error.
 * @param building the building key.
 * @returns the building data.
 */
export async function getBuildingData(building: string) {
  const buildingData = await getEntry('buildings', building);
  if (buildingData === undefined) {
    throw Error(`Building entry "${building}" does not exist.`);
  }
  return buildingData;
}

export function getBuildingLink(building: CollectionEntry<'buildings'>) {
  return `/wiki/buildings/${building.id}`;
}

type BuildingDataMinimal = Omit<CollectionEntry<'buildings'>['data'], 'overrides'>;

export async function groupBuildingDataByVersion<T>(
  buildingData: CollectionEntry<'buildings'>,
  fieldGetter: (data: BuildingDataMinimal) => T
) {
  const versions = await getCollection('versions');
  return groupDataByVersion(
    await Promise.all(
      versions.map(async (version) => ({
        version,
        data: await getBuildingDataForVersion(buildingData, version, fieldGetter)
      }))
    ),
    (name) => name.version
  );
}

export async function getBuildingDataForVersion<T>(
  buildingData: CollectionEntry<'buildings'>,
  version: CollectionEntry<'versions'>,
  fieldGetter: (data: BuildingDataMinimal) => T
) {
  if (!buildingData.data.overrides) {
    return fieldGetter(buildingData.data);
  }

  let overrides: Partial<CollectionEntry<'buildings'>['data']> | undefined = undefined;
  for (const versionData of buildingData.data.overrides) {
    if (!(await isVersionHigherOrSame(version, versionData.version.id))) {
      break;
    }

    overrides = versionData;
  }

  const splicedData: BuildingDataMinimal = {
    ...buildingData.data,
    ...overrides
  };

  return fieldGetter(splicedData);
}
