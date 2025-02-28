import type { ImageOutputFormat } from 'astro';
import { glob, type Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import minecraftData, { type Item } from 'minecraft-data';
import type { itemSchema } from 'src/schemas/item';
import { versionSchema } from 'src/schemas/version';

import { getJsonFile, parseYaml } from './file-utils';

const unavailableMcItems: Item[] = [
  {
    id: -1,
    name: 'water_bottle',
    displayName: 'Water Bottle',
    stackSize: 1
  }
];

const imageExtensionOverrides: Record<string, ImageOutputFormat> = {
  crimson_stem: 'gif',
  warped_stem: 'gif',
  compass: 'gif'
};

type RawItem = z.infer<typeof itemSchema>;

export function itemLoader(): Loader {
  const globLoader = glob({ base: './src/data/wiki/items', pattern: '**/*.yaml' });

  return {
    name: 'item-loader',
    load: async (context) => {
      context.store.clear();

      // Mod items
      await globLoader.load(context);

      // Minecraft items
      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);
      for (const version of Object.values(versions)) {
        const mcData = minecraftData(version.id);
        if (mcData === null) {
          console.warn(`Version data for ${version.id} does not exist`);
          continue;
        }
        for (const item of mcData.itemsArray.concat(unavailableMcItems)) {
          const id = 'minecraft/' + item.name;

          const data = await context.parseData<RawItem>({
            id,
            data: {
              id,
              name: item.displayName,
              description: '',
              icons: [
                `https://minecraft.wiki/images/Invicon_${item.displayName.replaceAll(' ', '_')}.${imageExtensionOverrides[item.name] ?? 'png'}`
              ]
            }
          });

          if (context.store.has(id)) {
            const current = context.store.get<RawItem>(id);
            if (current) {
              const currentName = current.data.overrides?.findLast(() => true)?.name ?? current.data.name;
              if (currentName === data.name) {
                continue;
              }

              if (current.data.overrides === undefined) {
                current.data.overrides = [];
              }
              current.data.overrides.push({
                ...data,
                version: {
                  collection: 'versions',
                  id: version.id
                }
              });

              const digest = context.generateDigest(current.data);
              context.store.set({
                ...current,
                digest
              });
            }
          } else {
            const digest = context.generateDigest(data);
            context.store.set({
              id,
              data,
              digest
            });
          }
        }
      }
    }
  };
}
