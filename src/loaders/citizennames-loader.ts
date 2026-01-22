import { type Loader } from 'astro/loaders';
import type { z } from 'astro/zod';
import path from 'path';

import { citizenNamesDataSchema, citizenNamesPackFileSchema, citizenNamesPackSchema } from '../schemas/citizen_names';
import { getAllNamespacesInFolder, getVersionsFromFile } from '../util/file-loaders';
import { exists, getAllFilesInDirectory, parseJson } from '../util/files';
import { parseResourceLocationFromAbsolutePath, resourceLocationToWikiId } from '../util/resourcelocation';
import { toTitleCase } from '../util/string';
import { getVersionCollectionId } from '../util/version';

export function citizenNamesLoader(): Loader {
  return {
    name: 'citizennames-loader',
    schema: citizenNamesPackSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      const unofficialPacks = await getAllFilesInDirectory(
        citizenNamesPackFileSchema,
        './src/data/wiki/citizen_name_packs',
        false,
        parseJson
      );

      for (const version of versions) {
        const submodule = version.submodule;

        const citizenNamesBasePath = `./generator/versions/${submodule}/output/citizen_names`;
        if (!(await exists(citizenNamesBasePath))) {
          context.logger.warn(`Citizen names path does not exist for version ${version.id}: ${citizenNamesBasePath}`);
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(citizenNamesBasePath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(citizenNamesBasePath, namespace);
          const citizenNames = await getAllFilesInDirectory(citizenNamesDataSchema, namespacePath, true);

          for (const [citizenNamePath, nameData] of Object.entries(citizenNames)) {
            const citizenNameId = parseResourceLocationFromAbsolutePath(citizenNamesBasePath, citizenNamePath);
            const baseId = resourceLocationToWikiId(citizenNameId);
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
        }

        for (const [citizenNamePath, packData] of Object.entries(unofficialPacks)) {
          const citizenNameId = parseResourceLocationFromAbsolutePath(citizenNamesBasePath, citizenNamePath);
          const baseId = resourceLocationToWikiId(citizenNameId);
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

      context.logger.info(`Loaded ${context.store.keys().length} citizen name packs`);
    }
  };
}
