import archiver from 'archiver';
import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';

type CitizenNamesPack = CollectionEntry<'citizen_name_packs'>['data'] & { id: string };

const citizenNamePacks = await getCollection('citizen_name_packs');

function packMcMetaTemplate(name: string, packFormat: number) {
  return JSON.stringify(
    {
      pack: {
        pack_format: packFormat,
        description: `${name} names for Minecolonies citizens.`
      }
    },
    undefined,
    4
  );
}

export function getStaticPaths() {
  return citizenNamePacks.map((pack) => ({
    params: {
      slug: pack.data.filename
    }
  }));
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

    archive.append(packMcMetaTemplate(data.name, data.packFormat), {
      name: 'pack.mcmeta'
    });

    archive.append(JSON.stringify(data.data, undefined, 4), {
      name: 'data/minecolonies/citizennames/default.json'
    });

    archive.finalize();
  });
};

function getPackFromSlug(slug: string): CitizenNamesPack | undefined {
  return citizenNamePacks.map((pack) => ({ ...pack.data, id: pack.id })).find((pack) => pack.filename === slug);
}
