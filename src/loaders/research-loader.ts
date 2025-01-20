import { reference, z } from 'astro:content';
import path from 'path';

import { getAllJsonFiles, getAllJsonFilesInDirectory } from './file-utils';

const translationsSchema = z.record(z.string(), z.string());

const treeSchemaInternal = z.object({
  ['base-time']: z.number(),
  ['branch-name']: z.string(),
  sortOrder: z.number()
});

const researchSchemaInternal = z.object({
  branch: z.string(),
  subtitle: z.string().optional(),
  icon: z.string(),
  parentResearch: z.string().optional(),
  researchLevel: z.number(),
  sortOrder: z.number().default(1),
  effects: z.array(z.record(z.string(), z.number())),
  requirements: z.array(
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal('minecolonies:item_simple'),
        item: z.string(),
        quantity: z.number().default(1)
      }),
      z.object({
        type: z.literal('minecolonies:item_list'),
        item: z.object({
          items: z.array(z.string())
        }),
        quantity: z.number().default(1)
      }),
      z.object({
        type: z.literal('minecolonies:item_tag'),
        item: z.object({
          tag: z.string()
        }),
        quantity: z.number().default(1)
      }),
      z.object({
        type: z.literal('minecolonies:building'),
        building: z.string(),
        level: z.number().default(1)
      }),
      z.object({
        type: z.literal('minecolonies:mandatory-building'),
        ['mandatory-building']: z.string(),
        level: z.number().default(1)
      }),
      z.object({
        type: z.literal('minecolonies:alternate-building'),
        building: z.string(),
        level: z.number().default(1)
      })
    ])
  )
});

export const researchSchema = z.object({
  id: z.string(),
  tree: reference('research_tree'),
  parent: reference('research').optional(),
  name: z.string(),
  requirements: z
    .array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('building'),
          building: reference('buildings'),
          level: z.number().default(1)
        }),
        z.object({
          type: z.literal('item'),
          items: z.string().array(),
          quantity: z.number().default(1)
        })
      ])
    )
    .optional(),
  effects: z.record(z.string(), z.number()).optional(),
  researchLevel: z.number()
});

export async function researchLoader() {
  const values: z.infer<typeof researchSchema>[] = [];

  const translations = await getTranslations();

  const trees = await getAllJsonFilesInDirectory(
    treeSchemaInternal,
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );
  for (const treeFileName of Object.keys(trees)) {
    const treeKey = path.parse(treeFileName).name;
    const researches = await getAllJsonFilesInDirectory(
      researchSchemaInternal,
      'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/' + treeKey
    );
    for (const [researchFileName, researchData] of Object.entries(researches)) {
      const researchKey = path.parse(researchFileName).name;
      const parent = researchData.parentResearch?.split('/').pop();
      values.push({
        id: researchKey,
        name: translations[`com.minecolonies.research.${treeKey}.${researchKey}.name`],
        tree: {
          collection: 'research_tree',
          id: treeKey
        },
        researchLevel: researchData.researchLevel,
        parent: parent
          ? {
              collection: 'research',
              id: parent
            }
          : undefined,
        effects: {},
        requirements: []
      });
    }
  }

  return values;
}

async function getTranslations() {
  const translations = await getAllJsonFiles(translationsSchema, [
    'minecolonies/src/main/resources/assets/minecolonies/lang/manual_en_us.json',
    'minecolonies/src/datagen/generated/minecolonies/assets/minecolonies/lang/default.json'
  ]);

  return Object.values(translations).reduce((prev, curr) => {
    for (const [key, value] of Object.entries(curr)) {
      prev[key] = value;
    }
    return prev;
  }, {});
}
