import { type CollectionEntry, getEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';
import { getWikiPages } from './wiki';

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

export async function getWorkerName(
  version: CollectionEntry<'versions'>,
  worker: CollectionEntry<'workers'>,
  plural = false
) {
  let name = plural ? worker.data.plural : worker.data.name;
  if (worker.data.overrides) {
    for (const versionName of worker.data.overrides) {
      if (versionName.name || versionName.plural) {
        if (await isVersionHigherOrSame(version, versionName.version.id)) {
          if (!plural && versionName.name) {
            name = versionName.name;
            break;
          }
          if (plural && versionName.plural) {
            name = versionName.plural;
            break;
          }
        }
      }
    }
  }
  return name;
}
