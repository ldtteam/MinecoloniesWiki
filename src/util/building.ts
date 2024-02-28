import { type CollectionEntry, getEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';

export interface MarkdocBuildingComponent {
  buildingId?: string;
  name: string;
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

export async function getBuildingName(
  version: CollectionEntry<'versions'>,
  building: CollectionEntry<'buildings'>,
  plural = false
) {
  let name = plural ? building.data.plural : building.data.name;
  if (building.data.overrides) {
    for (const versionName of building.data.overrides) {
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

export function getBuildingLink(building: CollectionEntry<'buildings'>) {
  return `/wiki/buildings/${building.id}`;
}
