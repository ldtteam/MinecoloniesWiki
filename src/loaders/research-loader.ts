import { getEntry, z } from 'astro:content';
import path from 'path';
import type { researchEffectsSchema, researchSchema, researchTreeSchema } from 'src/schemas/research';

import { getAllFilesInDirectory, getAllJsonFiles } from './file-utils';

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

const effectSchemaInternal = z.object({
  ['effect']: z.boolean(),
  ['levels']: z.array(z.number()).optional()
});

export async function researchTreesLoader() {
  const values: z.infer<typeof researchTreeSchema>[] = [];

  const translations = await getTranslations();

  const trees = await getAllFilesInDirectory(
    treeSchemaInternal,
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );

  for (const [treeFileName, treeData] of Object.entries(trees)) {
    const treeKey = path.parse(treeFileName).name;
    values.push({
      id: treeKey,
      name: translations[`com.minecolonies.research.${treeKey}.name`],
      sortOrder: treeData.sortOrder
    });
  }

  return values;
}

export async function researchLoader() {
  const values: z.infer<typeof researchSchema>[] = [];

  const translations = await getTranslations();

  const trees = await getAllFilesInDirectory(
    treeSchemaInternal,
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );
  for (const treeFileName of Object.keys(trees)) {
    const treeKey = path.parse(treeFileName).name;
    const researches = await getAllFilesInDirectory(
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
        requirements: await parseRequirements(researchData, translations),
        effects: await parseEffects(researchData)
      });
    }
  }

  return values;
}

export async function researchEffectsLoader() {
  const values: z.infer<typeof researchEffectsSchema>[] = [];

  const translations = await getTranslations();

  const effects = await getAllFilesInDirectory(
    effectSchemaInternal,
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/effects'
  );
  for (const [effectFileName, effectData] of Object.entries(effects)) {
    const effectKey = path.parse(effectFileName).name;

    if (effectKey.startsWith('blockhut')) {
      values.push({
        id: effectKey,
        type: 'building',
        building: {
          collection: 'buildings',
          id: effectKey.replace('blockhut', '')
        }
      });
    } else {
      values.push({
        id: effectKey,
        type: 'regular',
        format: translations[`com.minecolonies.research.effects.${effectKey}.description`],
        levels: effectData.levels ?? [0, 1]
      });
    }
  }

  return values;
}

async function parseRequirements(
  researchData: z.infer<typeof researchSchemaInternal>,
  translations: Record<string, string>
): Promise<z.infer<typeof researchSchema>['requirements']> {
  const values: z.infer<typeof researchSchema>['requirements'] = [];
  for (const requirement of researchData.requirements) {
    switch (requirement.type) {
      case 'minecolonies:building':
      case 'minecolonies:alternate-building':
        values.push({
          type: 'building',
          building: {
            collection: 'buildings',
            id: requirement.building
          },
          level: requirement.level
        });
        break;
      case 'minecolonies:mandatory-building':
        values.push({
          type: 'building',
          building: {
            collection: 'buildings',
            id: requirement['mandatory-building']
          },
          level: requirement.level
        });
        break;
      case 'minecolonies:item_simple':
        values.push({
          type: 'item',
          items: [requirement.item.replace(/\w+:/g, '')],
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_list':
        values.push({
          type: 'item',
          items: requirement.item.items.map((m) => m.replace(/\w+:/g, '')),
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_tag': {
        const tagData = await getEntry('tags', requirement.item.tag.replace(/\w+:/g, ''));
        if (tagData) {
          values.push({
            type: 'item_tag',
            name: translations[`com.minecolonies.coremod.research.tags.${requirement.item.tag}`],
            quantity: requirement.quantity
          });
        }
        break;
      }
    }
  }
  return values;
}

async function parseEffects(
  researchData: z.infer<typeof researchSchemaInternal>
): Promise<z.infer<typeof researchSchema>['effects']> {
  const values: z.infer<typeof researchSchema>['effects'] = [];
  for (const effect of researchData.effects) {
    for (const [effectKey, effectLevel] of Object.entries(effect)) {
      values.push({
        effect: {
          collection: 'research_effect',
          id: effectKey.replace('minecolonies:effects/', '')
        },
        level: effectLevel
      });
    }
  }

  return values;
}

export async function getTranslations() {
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
