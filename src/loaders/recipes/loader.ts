import { getVersionCollectionId } from '@utils/version';
import type { Loader } from 'astro/loaders';
import type { z } from 'astro:content';
import fs from 'fs/promises';
import path from 'path';
import { recipeSchema } from 'src/schemas/recipe';
import { versionSchema } from 'src/schemas/version';

import { getAllFilesInDirectory, getJsonFile, parseJson, parseYaml } from '../file-utils';
import { parserModule12000 } from './12000';
import { parserModule12100 } from './12100';
import type { VersionSchemaMap } from './types';

const versionSchemaMap: VersionSchemaMap = {
  '12000': parserModule12000,
  '12100': parserModule12100
};

export function recipeLoader(): Loader {
  return {
    name: 'recipe-loader',
    schema: recipeSchema,
    load: async (context) => {
      context.store.clear();

      const versions = (await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml)).toSorted(
        (a, b) => a.order - b.order
      );

      const mods = ['minecolonies', 'domum_ornamentum', 'structurize', 'multipiston'];

      for (const version of versions) {
        const submodule = version.submodule;
        const anyRecipeSchema = versionSchemaMap[submodule].fullSchema;

        for (const mod of mods) {
          const recipeDirs = [
            `submodules/${mod}-${submodule}/src/main/resources/data/${mod}/recipes`,
            `submodules/${mod}-${submodule}/src/main/resources/data/${mod}/recipe`,
            `submodules/${mod}-${submodule}/src/datagen/generated/${mod}/data/${mod}/recipes`,
            `submodules/${mod}-${submodule}/src/datagen/generated/${mod}/data/${mod}/recipe`,
            `submodules/${mod}-${submodule}/src/datagen/generated/${mod}/data/${mod}/crafterrecipes`
          ];

          for (const recipeDir of recipeDirs) {
            try {
              const recipeFolderExists = await exists(recipeDir);
              if (!recipeFolderExists) {
                continue;
              }
              const recipes = await getAllFilesInDirectory(anyRecipeSchema, recipeDir, true, parseJson, {
                suppressWarnings: true
              });

              for (const [filePath, recipeData] of Object.entries(recipes)) {
                const baseId = `${mod}/${path.parse(filePath).name}`;
                const id = getVersionCollectionId(baseId, version);
                const convertedRecipe = await versionSchemaMap[submodule].convert(baseId, recipeData, version);

                if (!convertedRecipe) {
                  continue;
                }

                const data = await context.parseData<z.infer<typeof recipeSchema>>({
                  id,
                  data: convertedRecipe
                });

                const digest = context.generateDigest(data);
                context.store.set({
                  id,
                  data,
                  digest
                });
              }
            } catch (error) {
              console.warn(`Error for recipes for version ${version.id}`, error);
              continue;
            }
          }
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} recipes`);
    }
  };
}

async function exists(f: string) {
  try {
    await fs.stat(f);
    return true;
  } catch {
    return false;
  }
}
