import { type CollectionEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';

export async function getWorkerName(
  version: CollectionEntry<'versions'>,
  worker: CollectionEntry<'workers'>,
  plural = false
) {
  let name = plural ? worker.data.plural : worker.data.name;
  if (worker.data.overrides) {
    for (const versionName of worker.data.overrides) {
      if (versionName.name || versionName.plural) {
        if (await isVersionHigherOrSame(version, versionName.version)) {
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
