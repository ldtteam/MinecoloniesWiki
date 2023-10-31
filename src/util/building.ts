import { type CollectionEntry } from 'astro:content';

/**
 * Obtain the building data based on the building key, if the building does not exist, throw an error.
 * @param building the building key.
 * @returns the building data.
 */
export async function getBuildingData(building: string) {
  const { getEntry } = await import('astro:content');
  const buildingData = await getEntry('buildings', building);
  if (buildingData === undefined) {
    throw Error(`Building entry "${building}" does not exist.`);
  }
  return buildingData;
}

export function getBuildingName(
  building: CollectionEntry<'buildings'>,
  plural = false
) {
  return plural ? building.data.plural : building.data.name;
}

export function getBuildingLink(building: CollectionEntry<'buildings'>) {
  return `/wiki/buildings/${building.id}`;
}

export function getBuildingMdLink(
  building: CollectionEntry<'buildings'>,
  plural: boolean
) {
  return `[${getBuildingName(building, plural)}](${getBuildingLink(building)})`;
}
