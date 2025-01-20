import { type CollectionEntry, getEntry } from 'astro:content';

import { isVersionHigherOrSame } from './version';

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
