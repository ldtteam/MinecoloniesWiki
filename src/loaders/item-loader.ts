import type { Loader } from 'astro/loaders';
import { z } from 'astro:content';
import minecraftData, { type Item } from 'minecraft-data';
import path from 'path';
import { itemSchema, itemSchemaWithoutVersionData } from 'src/schemas/item';
import { versionSchema } from 'src/schemas/version';

import { getVersionCollectionId } from '../util/version';
import { getAllFilesInDirectory, getJsonFile, parseYaml } from './file-utils';

const unavailableMcItems: Item[] = [
  {
    id: -1,
    name: 'water_bottle',
    displayName: 'Water Bottle',
    stackSize: 1
  }
];

export function itemLoader(): Loader {
  return {
    name: 'item-loader',
    schema: itemSchema,
    load: async (context) => {
      context.store.clear();

      const versions = (await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml)).toSorted(
        (a, b) => a.order - b.order
      );

      // Load mod items from YAML files (only from namespace subdirectories)
      const modItems = await getAllFilesInDirectory(
        itemSchemaWithoutVersionData,
        './src/data/wiki/items',
        true,
        parseYaml
      );

      // Create version-aware entries for mod items
      for (const [filePath, itemData] of Object.entries(modItems)) {
        const relativePath = path.relative('./src/data/wiki/items', filePath);
        const parsedPath = path.parse(relativePath);
        const baseId = `${parsedPath.dir}/${parsedPath.name}`.replace(/\\/g, '/');

        for (const version of versions) {
          const id = getVersionCollectionId(baseId, version);
          const data = await context.parseData<z.infer<typeof itemSchema>>({
            id,
            data: {
              ...itemData,
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              }
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

      // Minecraft items
      for (const version of Object.values(versions)) {
        const mcData = minecraftData(version.id);
        if (mcData === null) {
          console.warn(`Version data for ${version.id} does not exist`);
          continue;
        }

        for (const item of mcData.itemsArray.concat(unavailableMcItems)) {
          const baseId = 'minecraft/' + item.name;
          const id = getVersionCollectionId(baseId, version);
          const isBlock = mcData.blocksByName[item.name] !== undefined;

          const data = await context.parseData<z.infer<typeof itemSchema>>({
            id,
            data: {
              baseId,
              version: {
                id: version.id,
                collection: 'versions'
              },
              name: item.displayName,
              description: '',
              isBlock
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
