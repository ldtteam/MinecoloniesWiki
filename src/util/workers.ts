import { type CollectionEntry, getCollection } from 'astro:content';

import { groupDataByVersion, isVersionHigherOrSame } from './version';
import { getWikiPages, isWikiDataOfType, type WikiPageEntry } from './wiki';

export interface MarkdocWorkerComponent {
  frontmatter?: CollectionEntry<'wiki'>['data'];
  name?: string;
}

export async function getWorkerIdFromFrontmatter(frontmatter: CollectionEntry<'wiki'>['data'] | undefined) {
  let workerId: CollectionEntry<'workers'>['id'] | undefined;
  if (frontmatter && isWikiDataOfType(frontmatter, 'building')) {
    if (frontmatter.workers?.length === 1) {
      workerId = frontmatter.workers[0].id;
    }
  }
  return workerId;
}

export async function getWorkerReferenceBuilding(
  building: string | undefined,
  workerData: CollectionEntry<'workers'>
): Promise<WikiPageEntry<'building'>> {
  const buildings = await getWikiPages('building');
  const filteredBuildings = buildings.filter((f) => f.data.workers?.map((m) => m.id).includes(workerData.id));

  if (building) {
    const buildingPage = filteredBuildings.find((f) => f.data.id === building);
    if (buildingPage) {
      return buildingPage;
    }
  }

  if (filteredBuildings.length === 0) {
    throw new Error(`Worker name for ${workerData.id} is not referenced in a single building.`);
  }

  if (filteredBuildings.length > 1) {
    const primaryBuilding = filteredBuildings.find((f) => f.slug === workerData.data.primaryBuilding.slug);
    if (primaryBuilding) {
      return primaryBuilding;
    }
  }

  return filteredBuildings[0];
}

/**
 * Obtain the worker data based on the worker key, if the worker does not exist, throw an error.
 * @param worker the worker key.
 * @returns the worker data.
 */
export async function getWorkerData(worker: string) {
  const { getEntry } = await import('astro:content');
  const workerData = await getEntry('workers', worker);
  if (workerData === undefined) {
    throw Error(`Worker entry "${worker}" does not exist.`);
  }
  return workerData;
}

export async function groupWorkerDataByVersion(buildingData: CollectionEntry<'workers'>) {
  const versions = await getCollection('versions');
  return groupDataByVersion(
    await Promise.all(
      versions.map(async (version) => ({
        version,
        data: await getWorkerDataForVersion(buildingData, version)
      }))
    ),
    (item) => item.id
  );
}

export async function getWorkerDataForVersion(
  workerData: CollectionEntry<'workers'>,
  version: CollectionEntry<'versions'>
): Promise<CollectionEntry<'workers'>> {
  if (!workerData.data.overrides) {
    return workerData;
  }

  let overrides: Partial<CollectionEntry<'workers'>['data']> | undefined = undefined;
  for (const versionData of workerData.data.overrides) {
    if (!(await isVersionHigherOrSame(version, versionData.version.id))) {
      break;
    }

    overrides = versionData;
  }

  return {
    ...workerData,
    data: {
      ...workerData.data,
      ...overrides
    }
  };
}
