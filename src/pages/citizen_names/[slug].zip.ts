import { type CitizenNamesPackWithAuthor, getCitizenNamesPackWithAuthor } from '@utils/citizen_names';
import archiver from 'archiver';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const officialCitizenNamePacks = await getCollection('official_citizen_name_packs');
const citizenNamePacks = await getCollection('citizen_name_packs');

function packMcMetaTemplate(name: string) {
  return JSON.stringify(
    {
      pack: {
        pack_format: 9,
        description: `${name} names for Minecolonies citizens.`
      }
    },
    undefined,
    4
  );
}

export function getStaticPaths() {
  return officialCitizenNamePacks
    .map((pack) => ({
      params: {
        slug: getCitizenNamesPackWithAuthor(pack.id, { ...pack.data, id: pack.id }).filename
      }
    }))
    .concat(
      citizenNamePacks.map((pack) => ({
        params: {
          slug: pack.data.filename
        }
      }))
    );
}

export const GET: APIRoute = async ({ params }) => {
  const data = getPackFromSlug(params.slug ?? '');
  if (data === undefined) {
    throw new Error(`Citizen name pack with slug '${params.slug}' does not exist.`);
  }

  return new Promise<Response>((resolve, reject) => {
    const archive = archiver('zip', {
      zlib: {
        level: 9
      }
    });

    archive.on('finish', function () {
      resolve(new Response(archive.read()));
    });

    archive.on('error', reject);

    archive.append(packMcMetaTemplate(data.name), {
      name: 'pack.mcmeta'
    });

    archive.append(JSON.stringify(data.data, undefined, 4), {
      name: 'data/minecolonies/citizennames/default.json'
    });

    archive.finalize();
  });
};

function getPackFromSlug(slug: string): CitizenNamesPackWithAuthor | undefined {
  return (
    officialCitizenNamePacks
      .map((pack) => getCitizenNamesPackWithAuthor(pack.id, { ...pack.data, id: pack.id }))
      .find((pack) => pack.filename === slug) ??
    citizenNamePacks.map((pack) => ({ ...pack.data, id: pack.id })).find((pack) => pack.filename === slug)
  );
}
