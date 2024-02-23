import type { CollectionEntry } from 'astro:content';

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

export function getWorkerName(worker: CollectionEntry<'workers'>, plural: boolean) {
  return plural ? worker.data.plural : worker.data.name;
}

export function getWorkerLink(worker: CollectionEntry<'workers'>) {
  return `/wiki/workers/${worker.id}`;
}

export function getWorkerMdLink(worker: CollectionEntry<'workers'>, plural: boolean) {
  return `[${getWorkerName(worker, plural)}](${getWorkerLink(worker)})`;
}
