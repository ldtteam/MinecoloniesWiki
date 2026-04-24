import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import {
  FILTER_ID_BUILDING,
  FILTER_ID_INVISIBLE,
  FILTER_ID_NAME,
  FILTER_ID_PACK,
  FILTER_ID_SIZE_X,
  FILTER_ID_SIZE_Y,
  FILTER_ID_SIZE_Z,
  type SchematicsResponse
} from '../../schemas/schematics';
import { getNewestVersion } from '../../util/version';

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
  const newestVersion = await getNewestVersion();

  const packs = await getCollection(
    'schematics',
    (entry) => entry.data.version.id === newestVersion.id && allowedPacks.includes(entry.data.baseId)
  );

  const filteredPacks = await Promise.all(
    packs.map(async (pack) => ({
      ...pack.data,
      schematics: await filterSchematics(pack.data.schematics, filters)
    }))
  );

  return createResponse({ success: true, packs: filteredPacks });
};

async function filterSchematics(
  schematics: CollectionEntry<'schematics'>['data']['schematics'],
  filters: URLSearchParams
) {
  const results = await Promise.all(
    schematics.map(async (schematic) => {
      if (filters.has(FILTER_ID_NAME) && !schematic.id.includes(filters.get(FILTER_ID_NAME) ?? '')) {
        return null;
      }

      if (filters.has(FILTER_ID_BUILDING)) {
        if (schematic.type !== 'building') {
          return null;
        }
        const building = await getEntry(schematic.building);
        if (building?.data.baseId !== filters.get(FILTER_ID_BUILDING)) {
          return null;
        }
      }

      if (filters.has(FILTER_ID_SIZE_X) && schematic.size.x > parseInt(filters.get(FILTER_ID_SIZE_X) ?? '', 10)) {
        return null;
      }

      if (filters.has(FILTER_ID_SIZE_Y) && schematic.size.y > parseInt(filters.get(FILTER_ID_SIZE_Y) ?? '', 10)) {
        return null;
      }

      if (filters.has(FILTER_ID_SIZE_Z) && schematic.size.z > parseInt(filters.get(FILTER_ID_SIZE_Z) ?? '', 10)) {
        return null;
      }

      if (filters.get(FILTER_ID_INVISIBLE) !== 'true' && schematic.invisible) {
        return null;
      }

      return schematic;
    })
  );

  return results.filter((s): s is NonNullable<typeof s> => s !== null);
}

function createResponse(content: SchematicsResponse) {
  return new Response(JSON.stringify(content), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
