import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import path from 'path';

import { itemSchema } from '../schemas/item';
import { getAllNamespacesInFolder, getVersionsFromFile } from '../util/file-loaders';
import { exists, getAllFilesInDirectory } from '../util/files';
import { parseResourceLocationFromAbsolutePath, resourceLocationToWikiId } from '../util/resourcelocation';
import { getVersionCollectionId } from '../util/version';

const generatorItemSchema = z.object({
  name: z.string(),
  'block-id': z.string().optional()
});

const unavailableItems = [
  { namespace: 'minecraft', name: 'water_bottle', displayName: 'Water Bottle', isBlock: false }
];

export function itemLoader(): Loader {
  return {
    name: 'item-loader',
    schema: itemSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      for (const version of versions) {
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

            const data = await context.parseData<z.infer<typeof itemSchema>>({
              id,
              data: {
                baseId,
                version: {
                  id: version.id,
                  collection: 'versions'
                },
                name: itemData.name,
                isBlock: itemData['block-id'] !== undefined
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

          const data = await context.parseData<z.infer<typeof itemSchema>>({
            id,
            data: {
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              },
              name: item.displayName,
              isBlock: item.isBlock
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
  };
}
