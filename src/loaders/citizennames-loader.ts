import { getVersionCollectionId } from '@utils/version';
import { type Loader } from 'astro/loaders';
import type { z } from 'astro:content';
import path from 'path';
import { citizenNamesDataSchema, citizenNamesPackFileSchema, citizenNamesPackSchema } from 'src/schemas/citizen_names';
import { versionSchema } from 'src/schemas/version';
import { toTitleCase } from 'src/util/string';

import { getAllFilesInDirectory, getJsonFile, parseJson, parseYaml } from './file-utils';

export function citizenNamesLoader(): Loader {
  return {
    name: 'citizennames-loader',
    schema: citizenNamesPackSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);

      const unofficialPacks = await getAllFilesInDirectory(
        citizenNamesPackFileSchema,
        './src/data/wiki/citizen_name_packs',
        false,
        parseJson
      );

      for (const version of versions) {
        const submodule = version.submodule;

        const citizenNames = await getAllFilesInDirectory(
          citizenNamesDataSchema,
          `submodules/minecolonies-${submodule}/src/main/resources/data/minecolonies/citizennames`,
          false,
          parseJson
        );

        for (const [fileName, nameData] of Object.entries(citizenNames)) {
          const baseId = path.parse(fileName).name;
          const id = getVersionCollectionId(baseId, version);
          const displayName = toTitleCase(baseId.replaceAll(/[\W_]+/g, ' '));

          const data = await context.parseData<z.infer<typeof citizenNamesPackSchema>>({
            id,
            data: {
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              },
              name: `Official ${displayName}`,
              filename: `Official_${displayName.replaceAll(' ', '_')}_Names_${version.id}`,
              credits: 'Minecolonies Team',
              official: true,
              packFormat: version.packFormat,
              data: nameData
            }
          });

          const digest = context.generateDigest(data);
          context.store.set({
            id,
            data,
            digest
          });
        }

        for (const [fileName, packData] of Object.entries(unofficialPacks)) {
          const baseId = path.parse(fileName).name;
          const id = getVersionCollectionId(baseId, version);

          const data = await context.parseData<z.infer<typeof citizenNamesPackSchema>>({
            id,
            data: {
              ...packData,
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              },
              official: false,
              packFormat: version.packFormat
            }
          });

          const digest = context.generateDigest(data);
          context.store.set({
            id,
            data,
            digest
          });
        }
      }
    }
  };
}
