import type { CollectionEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';

export interface MarkdocWorkerComponent {
  workerId?: string;
  name: string;
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

export function getWorkerLink(worker: CollectionEntry<'workers'>) {
  return `/wiki/workers/${worker.id}`;
}
