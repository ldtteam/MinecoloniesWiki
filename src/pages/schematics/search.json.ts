import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';
import {
  FILTER_ID_BUILDING,
  FILTER_ID_INVISIBLE,
  FILTER_ID_NAME,
  FILTER_ID_PACK,
  FILTER_ID_SIZE_X,
  FILTER_ID_SIZE_Y,
  FILTER_ID_SIZE_Z,
  type SchematicsResponse
} from 'src/schemas/schematics';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const filters = url.searchParams;
  if (!filters.has(FILTER_ID_PACK)) {
    return createResponse({
      success: false,
      warning: 'Please pick at least one schematic pack',
      packs: []
    });
  }

  const allowedPacks = filters.getAll(FILTER_ID_PACK);

  const packs = await getCollection('schematics', (entry) => {
    if (!allowedPacks.includes(entry.id)) {
      return false;
    }

    return true;
  });

  return createResponse({
    success: true,
    packs: packs.map((pack) => ({
      ...pack.data,
      schematics: pack.data.schematics.filter((schematic) => filterSchematic(schematic, filters))
    }))
  });
};

function filterSchematic(
  schematic: CollectionEntry<'schematics'>['data']['schematics'][number],
  filters: URLSearchParams
) {
  if (filters.has(FILTER_ID_NAME) && !schematic.id.includes(filters.get(FILTER_ID_NAME) ?? '')) {
    return false;
  }

  if (
    filters.has(FILTER_ID_BUILDING) &&
    !(schematic.type === 'building' && schematic.building.id === filters.get(FILTER_ID_BUILDING))
  ) {
    return false;
  }

  if (filters.has(FILTER_ID_SIZE_X) && schematic.size.x > parseInt(filters.get(FILTER_ID_SIZE_X) ?? '', 10)) {
    return false;
  }

  if (filters.has(FILTER_ID_SIZE_Y) && schematic.size.y > parseInt(filters.get(FILTER_ID_SIZE_Y) ?? '', 10)) {
    return false;
  }

  if (filters.has(FILTER_ID_SIZE_Z) && schematic.size.z > parseInt(filters.get(FILTER_ID_SIZE_Z) ?? '', 10)) {
    return false;
  }

  if (filters.get(FILTER_ID_INVISIBLE) !== 'true' && schematic.invisible) {
    return false;
  }

  return true;
}

function createResponse(content: SchematicsResponse) {
  return new Response(JSON.stringify(content), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
