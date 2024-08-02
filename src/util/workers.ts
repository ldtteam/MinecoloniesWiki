import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getBuildingData, getBuildingIdFromFrontmatter } from './building';
import { groupDataByVersion, isVersionHigherOrSame } from './version';

export interface MarkdocWorkerComponent {
  frontmatter?: CollectionEntry<'wiki'>['data'];
  name?: string;
}

/**
 * Obtain the building reference for a given worker.
 * @param worker the input worker id.
 * @param building the input building id.
 * @returns the building id.
 */
export async function getReferenceBuildingId(worker: string, building?: string): Promise<string> {
  const buildings = await getWikiPages('building');

  if (building && buildings) {
    return building;
  }

  if (buildings.length !== 1) {
    throw new Error(
      `Worker name for ${workerTarget} requires a building argument because this worker is referenced in none or multiple buildings.`
    );
  }

  return 'buildings/alchemist.mdoc';
}

export async function getWorkerIdFromFrontmatter(frontmatter: CollectionEntry<'wiki'>['data'] | undefined) {
  let workerId: CollectionEntry<'workers'>['id'] | undefined;
  if (frontmatter?.type === 'building') {
    const building = await getEntry('buildings', frontmatter.building.id);
    if (building.data.workers?.length === 1) {
      workerId = building.data.workers[0].id;
    }
  }
  return workerId;
}

export async function getWorkerReferenceBuilding(
  building: string | undefined,
  frontmatter: CollectionEntry<'wiki'>['data'] | undefined,
  workerData: CollectionEntry<'workers'>
) {
  let referenceBuilding =
    building ?? (await getBuildingIdFromFrontmatter(frontmatter)) ?? workerData.data.primaryBuilding.id;
  if (!referenceBuilding) {
    const allBuildings = await getCollection('buildings', (building) =>
      building.data.workers?.map<string>((m) => m.id).includes(workerData.id)
    );
    if (allBuildings.length !== 1) {
      throw new Error(
        `Worker reference for ${workerData.id} requires a building argument because this worker is referenced in none or multiple buildings.`
      );
    }
    referenceBuilding = allBuildings[0].id;
  }
  return await getBuildingData(referenceBuilding);
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
