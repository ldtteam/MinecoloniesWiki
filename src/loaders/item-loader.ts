import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import path from 'path';

import { itemSchema } from '../schemas/item';
import { getAllNamespacesInFolder, getVersionsFromFile } from '../util/file-loaders';
import { exists, getAllFilesInDirectory, parseJson } from '../util/files';
import { parseResourceLocationFromAbsolutePath, resourceLocationToWikiId } from '../util/resourcelocation';
import { getVersionCollectionId } from '../util/version';
import { parserModule12000 } from './recipes/12000';
import { parserModule12100 } from './recipes/12100';
import type { StoredRecipeData, VersionSchemaMap } from './recipes/common';

const generatorItemSchema = z.object({
  name: z.string(),
  'block-id': z.string().optional()
});

const unavailableItems = [
  {
    namespace: 'minecraft',
    name: 'water_bottle',
    displayName: 'Water Bottle'
  }
];

const versionSchemaMap: VersionSchemaMap = {
  '12000': parserModule12000,
  '12100': parserModule12100
};

export function itemLoader() {
  return {
    name: 'item-loader',
    schema: itemSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      for (const version of versions) {
        const recipesByOutputItem = new Map<string, StoredRecipeData[]>();

        const anyRecipeSchema = versionSchemaMap[version.submodule].fullSchema;

        const recipesPath = `./generator/versions/${version.submodule}/output/recipes`;
        if (await exists(recipesPath)) {
          const recipeNamespaces = await getAllNamespacesInFolder(recipesPath);

          for (const namespace of recipeNamespaces) {
            const namespacePath = path.join(recipesPath, namespace);

            try {
              const recipes = await getAllFilesInDirectory(anyRecipeSchema, namespacePath, true, parseJson, {
                suppressWarnings: true
              });

              for (const recipeData of Object.values(recipes)) {
                const convertedRecipe = await versionSchemaMap[version.submodule].convert(recipeData, version);

                if (!convertedRecipe) {
                  continue;
                }

                if (!recipesByOutputItem.has(convertedRecipe.output.id)) {
                  recipesByOutputItem.set(convertedRecipe.output.id, []);
                }
                recipesByOutputItem.get(convertedRecipe.output.id)?.push(convertedRecipe);
              }
            } catch (error) {
              console.warn(`Error loading recipes for ${namespace} version ${version.id}`, error);
              continue;
            }
          }
        }

        const crafterRecipesPath = `./generator/versions/${version.submodule}/output/crafter_recipes`;
        if (await exists(crafterRecipesPath)) {
          const crafterNamespaces = await getAllNamespacesInFolder(crafterRecipesPath);

          for (const namespace of crafterNamespaces) {
            const namespacePath = path.join(crafterRecipesPath, namespace);

            try {
              const recipes = await getAllFilesInDirectory(anyRecipeSchema, namespacePath, true, parseJson, {
                suppressWarnings: true
              });

              for (const recipeData of Object.values(recipes)) {
                const convertedRecipe = await versionSchemaMap[version.submodule].convert(recipeData, version);

                if (!convertedRecipe) {
                  continue;
                }

                if (!recipesByOutputItem.has(convertedRecipe.output.id)) {
                  recipesByOutputItem.set(convertedRecipe.output.id, []);
                }
                recipesByOutputItem.get(convertedRecipe.output.id)?.push(convertedRecipe);
              }
            } catch (error) {
              console.warn(`Error loading crafter recipes for ${namespace} version ${version.id}`, error);
              continue;
            }
          }
        }

        const generatorItemsPath = `./generator/versions/${version.submodule}/output/items`;

        if (!(await exists(generatorItemsPath))) {
          context.logger.warn(`Generator items path does not exist for version ${version.id}: ${generatorItemsPath}`);
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(generatorItemsPath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(generatorItemsPath, namespace);

          const generatorItems = await getAllFilesInDirectory(generatorItemSchema, namespacePath, true);

          for (const [itemPath, itemData] of Object.entries(generatorItems)) {
            const itemId = parseResourceLocationFromAbsolutePath(generatorItemsPath, itemPath);
            const baseId = resourceLocationToWikiId(itemId);
            const id = getVersionCollectionId(baseId, version);

            const recipes = recipesByOutputItem.get(id) ?? [];

            const data = await context.parseData<z.infer<typeof itemSchema>>({
              id,
              data: {
                baseId,
                version: {
                  id: version.id,
                  collection: 'versions'
                },
                name: itemData.name,
                blockId: itemData['block-id'],
                recipes
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

        for (const item of unavailableItems) {
          const baseId = `${item.namespace}/${item.name}`;
          const id = getVersionCollectionId(baseId, version);

          const recipes = recipesByOutputItem.get(id) ?? [];

          const data = await context.parseData<z.infer<typeof itemSchema>>({
            id,
            data: {
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              },
              name: item.displayName,
              recipes
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

      context.logger.info(`Loaded ${context.store.keys().length} items`);
    }
  } satisfies Loader;
}
