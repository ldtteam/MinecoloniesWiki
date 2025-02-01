// import type { ImageOutputFormat } from 'astro';
// import { z } from 'astro/zod';
// import { getImage } from 'astro:assets';
// import { getCollection } from 'astro:content';
// import minecraftData, { type Item } from 'minecraft-data';
// import path from 'path';
// import type { itemSchema } from 'src/schemas/item';

// import { getAllFilesInDirectory, parseYaml } from './file-utils';

// const itemSchemaInternal = z.object({
//   name: z.string(),
//   icons: z.array(z.string())
// });

// const unavailableMcItems: Item[] = [
//   {
//     id: -1,
//     name: 'water_bottle',
//     displayName: 'Water Bottle',
//     stackSize: 1
//   }
// ];

// const imageExtensionOverrides: Record<string, ImageOutputFormat> = {
//   crimson_stem: 'gif',
//   warped_stem: 'gif',
//   compass: 'gif'
// };

// export async function itemLoaderMc() {
//   const values: z.infer<ReturnType<typeof itemSchema>>[] = [];

//   // Minecraft items
//   const versions = await getCollection('versions');
//   const mcDataValues = new Map<string, z.infer<ReturnType<typeof itemSchema>>['versions']>();
//   for (const version of versions) {
//     const mcData = minecraftData(version.id);
//     if (mcData === null) {
//       console.warn(`Version data for ${version.id} does not exist`);
//       continue;
//     }
//     for (const item of mcData.itemsArray.concat(unavailableMcItems)) {
//       const itemId = 'minecraft/' + item.name;
//       if (!mcDataValues.has(itemId)) {
//         mcDataValues.set(itemId, []);
//       }

//       const parsedItemName = item.displayName.replaceAll(' ', '_');
//       const extension = imageExtensionOverrides[item.id] ?? 'png';
//       const url = `https://minecraft.wiki/images/Invicon_${parsedItemName}.${extension}`;

//       const image = await getImage({
//         src: url,
//         width: 32,
//         height: 32
//       });

//       mcDataValues.get(itemId)?.push({
//         name: item.displayName,
//         icons: [image.options.src as ImageMetadata],
//         version
//       });
//     }
//   }
//   values.push(
//     ...mcDataValues.entries().map(([id, versions]) => ({
//       id,
//       versions
//     }))
//   );

//   // Mod items
//   const modItems = await getAllFilesInDirectory(itemSchemaInternal, './src/data/wiki/items', true, parseYaml);
//   for (const [fileName, item] of Object.entries(modItems)) {
//     const id = path.parse(fileName).name;

//     const icons = await Promise.all(
//       item.icons.map(
//         async (icon) =>
//           await getImage({
//             src: icon,
//             width: 32,
//             height: 32
//           }).then((img) => img.options.src as ImageMetadata)
//       )
//     );

//     values.push({
//       id,
//       versions: [
//         ...versions.map((version) => ({
//           id,
//           name: item.name,
//           icons,
//           version
//         }))
//       ]
//     });
//   }

//   return values;
// }

// export const itemLoader = combine(
//   simpleLoader('item-loader-mc')(itemLoaderMc),
//   glob({ base: './src/data/wiki/items', pattern: '*.yaml' })
// );
