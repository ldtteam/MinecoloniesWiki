import archiver from 'archiver';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

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
  return citizenNamePacks.map((citizenNamePack) => ({
    params: {
      slug: citizenNamePack.data.filename
    }
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const data = citizenNamePacks.find((citizenNamePack) => citizenNamePack.data.filename === params.slug);
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

    archive.append(packMcMetaTemplate(data.data.name), {
      name: 'pack.mcmeta'
    });

    archive.append(JSON.stringify(data.data.data, undefined, 4), {
      name: 'data/minecolonies/citizennames/default.json'
    });

    archive.finalize();
  });
};
