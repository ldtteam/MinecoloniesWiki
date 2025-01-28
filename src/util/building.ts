import { type CollectionEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';

export async function getBuildingName(
  version: CollectionEntry<'versions'>,
  building: CollectionEntry<'buildings'>,
  plural = false
) {
  let name = plural ? building.data.plural : building.data.name;
  if (building.data.overrides) {
    for (const versionName of building.data.overrides) {
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

export function getBuildingLink(building: CollectionEntry<'buildings'>) {
  return `/wiki/buildings/${building.id}`;
}
