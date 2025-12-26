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
  requirements: z
    .array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('minecolonies:building'),
          building: z.string(),
          level: z.number().default(1)
        }),
        z.object({
          type: z.literal('minecolonies:single-building'),
          building: z.string(),
          level: z.number().default(1)
        }),
        z.object({
          type: z.literal('minecolonies:alternate-building'),
          ['alternate-buildings']: z.string().array(),
          level: z.number().default(1)
        })
      ])
    )
    .optional(),
  costs: z
    .array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('minecolonies:item_simple'),
          item: z.string(),
          quantity: z.number().default(1)
        }),
        z.object({
          type: z.literal('minecolonies:item_list'),
          items: z.array(z.string()),
          quantity: z.number().default(1)
        }),
        z.object({
          type: z.literal('minecolonies:item_tag'),
          tag: z.string(),
          quantity: z.number().default(1)
        })
      ])
    )
    .optional(),
  effects: z
    .array(
      z.object({
        id: z.string(),
        level: z.number()
      })
    )
    .optional()
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
        tree: {
          collection: 'research_tree',
          id: treeKey
        },
        parent: parent
          ? {
              collection: 'research',
              id: parent
            }
          : undefined,
        name: translations[`com.minecolonies.research.${treeKey}.${researchKey}.name`],
        subtitle: translations[`com.minecolonies.research.${treeKey}.${researchKey}.subtitle`],
        researchLevel: researchData.researchLevel,
        sortOrder: researchData.sortOrder,
        requirements: await parseRequirements(researchData),
        costs: await parseCosts(researchData, translations),
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
  researchData: z.infer<typeof researchSchemaInternal>
): Promise<z.infer<typeof researchSchema>['requirements']> {
  const values: z.infer<typeof researchSchema>['requirements'] = [];
  for (const requirement of researchData.requirements ?? []) {
    switch (requirement.type) {
      case 'minecolonies:building':
      case 'minecolonies:single-building':
        values.push({
          type: 'building',
          building: {
            collection: 'buildings',
            id: requirement.building.replace('minecolonies:', '')
          },
          single: requirement.type === 'minecolonies:single-building',
          level: requirement.level
        });
        break;
      case 'minecolonies:alternate-building':
        values.push({
          type: 'buildings_alternate',
          buildings: requirement['alternate-buildings'].map((building) => ({
            collection: 'buildings',
            id: building.replace('minecolonies:', '')
          })),
          level: requirement.level
        });
        break;
    }
  }
  return values;
}

async function parseCosts(
  researchData: z.infer<typeof researchSchemaInternal>,
  translations: Record<string, string>
): Promise<z.infer<typeof researchSchema>['costs']> {
  const values: z.infer<typeof researchSchema>['costs'] = [];
  for (const requirement of researchData.costs ?? []) {
    switch (requirement.type) {
      case 'minecolonies:item_simple':
        values.push({
          type: 'item',
          items: [
            {
              collection: 'items',
              id: requirement.item.replace(':', '/')
            }
          ],
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_list':
        values.push({
          type: 'item',
          items: requirement.items.map((m) => ({ collection: 'items', id: m.replace(':', '/') })),
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_tag': {
        const tagData = await getEntry('tags', requirement.tag.replace(/\w+:/g, ''));
        if (tagData) {
          values.push({
            type: 'item_tag',
            name: translations[`com.minecolonies.coremod.research.tags.${requirement.tag}`],
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
  for (const effect of researchData.effects ?? []) {
    values.push({
      effect: {
        collection: 'research_effect',
        id: effect.id.replace('minecolonies:effects/', '')
      },
      level: effect.level
    });
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
