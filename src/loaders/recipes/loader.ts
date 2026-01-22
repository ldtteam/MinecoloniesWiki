import type { Loader } from 'astro/loaders';
import type { z } from 'astro/zod';
import path from 'path';

import { recipeSchema } from '../../schemas/recipe';
import { getAllNamespacesInFolder, getVersionsFromFile } from '../../util/file-loaders';
import { exists, getAllFilesInDirectory, parseJson } from '../../util/files';
import { parseResourceLocationFromAbsolutePath, resourceLocationToWikiId } from '../../util/resourcelocation';
import { getVersionCollectionId } from '../../util/version';
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

      const versions = await getVersionsFromFile();

      for (const version of versions) {
        const submodule = version.submodule;
        const anyRecipeSchema = versionSchemaMap[submodule].fullSchema;

        // Load regular recipes from generator
        const recipesPath = `./generator/versions/${submodule}/output/recipes`;
        if (await exists(recipesPath)) {
          const namespaces = await getAllNamespacesInFolder(recipesPath);

          for (const namespace of namespaces) {
            const namespacePath = path.join(recipesPath, namespace);

            try {
              const recipes = await getAllFilesInDirectory(anyRecipeSchema, namespacePath, true, parseJson, {
                suppressWarnings: true
              });

              for (const [recipePath, recipeData] of Object.entries(recipes)) {
                const itemId = parseResourceLocationFromAbsolutePath(recipesPath, recipePath);
                const baseId = resourceLocationToWikiId(itemId);
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
              console.warn(`Error loading recipes for ${namespace} version ${version.id}`, error);
              continue;
            }
          }
        }

        // Load crafter recipes from generator
        const crafterRecipesPath = `./generator/versions/${submodule}/output/crafter_recipes`;
        if (await exists(crafterRecipesPath)) {
          const namespaces = await getAllNamespacesInFolder(crafterRecipesPath);

          for (const namespace of namespaces) {
            const namespacePath = path.join(crafterRecipesPath, namespace);

            try {
              const recipes = await getAllFilesInDirectory(anyRecipeSchema, namespacePath, true, parseJson, {
                suppressWarnings: true
              });

              for (const [filePath, recipeData] of Object.entries(recipes)) {
                const baseId = `${namespace}/${path.parse(filePath).name}`;
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
              console.warn(`Error loading crafter recipes for ${namespace} version ${version.id}`, error);
              continue;
            }
          }
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} recipes`);
    }
  };
}
