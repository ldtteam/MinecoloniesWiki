import { getItemsFromTag } from '@utils/items';
import { parseResourceLocation, resourceLocationToWikiReference } from '@utils/resourcelocation';
import { getVersionCollectionId } from '@utils/version';
import type { Loader } from 'astro/loaders';
import { type CollectionEntry, z } from 'astro:content';
import path from 'path';
import { researchEffectsSchema, researchSchema, researchTreeSchema } from 'src/schemas/research';
import { versionSchema } from 'src/schemas/version';

import { getAllFilesInDirectory, getAllJsonFiles, getJsonFile, parseYaml } from './file-utils';

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
      z.union([
        z.object({
          item: z.string().optional(),
          tag: z.string().optional(),
          count: z.number().default(1)
        }),
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

export function researchTreesLoader(): Loader {
  return {
    name: 'research-trees-loader',
    schema: researchTreeSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const trees = await getAllFilesInDirectory(
          treeSchemaInternal,
          `submodules/minecolonies-${submodule}/src/datagen/generated/minecolonies/data/minecolonies/researches`
        );

        for (const [treeFileName, treeData] of Object.entries(trees)) {
          const baseId = path.parse(treeFileName).name;
          const id = getVersionCollectionId(baseId, version);

          const data = await context.parseData<z.infer<typeof researchTreeSchema>>({
            id,
            data: {
              baseId,
              version: {
                collection: 'versions',
                id: version.id
              },
              name: translations[`com.minecolonies.research.${baseId}.name`],
              sortOrder: treeData.sortOrder
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

export function researchLoader(): Loader {
  return {
    name: 'research-loader',
    schema: researchSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const trees = await getAllFilesInDirectory(
          treeSchemaInternal,
          `submodules/minecolonies-${submodule}/src/datagen/generated/minecolonies/data/minecolonies/researches`
        );
        for (const treeFileName of Object.keys(trees)) {
          const treeKey = path.parse(treeFileName).name;
          const researches = await getAllFilesInDirectory(
            researchSchemaInternal,
            `submodules/minecolonies-${submodule}/src/datagen/generated/minecolonies/data/minecolonies/researches/${treeKey}`
          );
          for (const [researchFileName, researchData] of Object.entries(researches)) {
            const baseId = path.parse(researchFileName).name;
            const id = getVersionCollectionId(baseId, version);
            const parent = researchData.parentResearch?.split('/').pop();

            const data = await context.parseData<z.infer<typeof researchSchema>>({
              id,
              data: {
                baseId,
                version: {
                  collection: 'versions',
                  id: version.id
                },
                tree: {
                  collection: 'research_tree',
                  id: getVersionCollectionId(treeKey, version)
                },
                parent: parent
                  ? {
                      collection: 'research',
                      id: getVersionCollectionId(parent, version)
                    }
                  : undefined,
                name: translations[`com.minecolonies.research.${treeKey}.${baseId}.name`],
                subtitle: translations[`com.minecolonies.research.${treeKey}.${baseId}.subtitle`],
                researchLevel: researchData.researchLevel,
                sortOrder: researchData.sortOrder,
                requirements: await parseRequirements(researchData),
                costs: await parseCosts(researchData, version, translations),
                effects: await parseEffects(researchData, version)
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
    }
  };
}

export function researchEffectLoader(): Loader {
  return {
    name: 'research-effect-loader',
    schema: researchEffectsSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const effects = await getAllFilesInDirectory(
          effectSchemaInternal,
          `submodules/minecolonies-${submodule}/src/datagen/generated/minecolonies/data/minecolonies/researches/effects`
        );
        for (const [effectFileName, effectData] of Object.entries(effects)) {
          const baseId = path.parse(effectFileName).name;
          const id = getVersionCollectionId(baseId, version);

          if (baseId.startsWith('blockhut')) {
            const data = await context.parseData<z.infer<typeof researchEffectsSchema>>({
              id,
              data: {
                baseId,
                version: {
                  collection: 'versions',
                  id: version.id
                },
                type: 'building',
                building: {
                  collection: 'buildings',
                  id: baseId.replace('blockhut', '')
                }
              }
            });

            const digest = context.generateDigest(data);
            context.store.set({
              id,
              data,
              digest
            });
          } else {
            const data = await context.parseData<z.infer<typeof researchEffectsSchema>>({
              id,
              data: {
                baseId,
                version: {
                  collection: 'versions',
                  id: version.id
                },
                type: 'regular',
                format: translations[`com.minecolonies.research.effects.${baseId}.description`],
                levels: effectData.levels ?? [0, 1]
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
    }
  };
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
  version: CollectionEntry<'versions'>['data'],
  translations: Record<string, string>
): Promise<z.infer<typeof researchSchema>['costs']> {
  const values: z.infer<typeof researchSchema>['costs'] = [];
  for (const requirement of researchData.costs ?? []) {
    if (!('type' in requirement)) {
      if (requirement.item) {
        values.push({
          type: 'item',
          items: [resourceLocationToWikiReference(parseResourceLocation(requirement.item), version, 'items')],
          quantity: requirement.count
        });
      } else if (requirement.tag) {
        const tagData = await getItemsFromTag(parseResourceLocation(requirement.tag), version);
        if (tagData) {
          values.push({
            type: 'item_tag',
            name: translations[`com.minecolonies.coremod.research.tags.${requirement.tag}`] || requirement.tag,
            quantity: requirement.count
          });
        }
      }
      continue;
    }

    switch (requirement.type) {
      case 'minecolonies:item_simple':
        values.push({
          type: 'item',
          items: [resourceLocationToWikiReference(parseResourceLocation(requirement.item), version, 'items')],
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_list':
        values.push({
          type: 'item',
          items: requirement.items.map((m) =>
            resourceLocationToWikiReference(parseResourceLocation(m), version, 'items')
          ),
          quantity: requirement.quantity
        });
        break;
      case 'minecolonies:item_tag': {
        const tagData = await getItemsFromTag(parseResourceLocation(requirement.tag), version);
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
  researchData: z.infer<typeof researchSchemaInternal>,
  version: z.infer<typeof versionSchema>
): Promise<z.infer<typeof researchSchema>['effects']> {
  const values: z.infer<typeof researchSchema>['effects'] = [];
  for (const effect of researchData.effects ?? []) {
    values.push({
      effect: {
        collection: 'research_effect',
        id: getVersionCollectionId(effect.id.replace('minecolonies:effects/', ''), version)
      },
      level: effect.level
    });
  }

  return values;
}

export async function getTranslations(submodule: string) {
  const translations = await getAllJsonFiles(translationsSchema, [
    `submodules/minecolonies-${submodule}/src/main/resources/assets/minecolonies/lang/manual_en_us.json`,
    `submodules/minecolonies-${submodule}/src/datagen/generated/minecolonies/assets/minecolonies/lang/default.json`
  ]);

  return Object.values(translations).reduce((prev, curr) => {
    for (const [key, value] of Object.entries(curr)) {
      prev[key] = value;
    }
    return prev;
  }, {});
}
