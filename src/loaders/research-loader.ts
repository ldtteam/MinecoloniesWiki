import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { type CollectionEntry } from 'astro:content';
import path from 'path';

import { researchEffectsSchema, researchSchema, researchTreeSchema } from '../schemas/research';
import type { Translations } from '../schemas/translations';
import { versionSchema } from '../schemas/version';
import { getAllNamespacesInFolder, getTranslations, getVersionsFromFile } from '../util/file-loaders';
import { exists, getAllFilesInDirectory } from '../util/files';
import { getItemsFromTag } from '../util/items';
import {
  parseResourceLocation,
  parseResourceLocationFromAbsolutePath,
  resourceLocationToWikiId,
  resourceLocationToWikiReference
} from '../util/resourcelocation';
import { getVersionCollectionId } from '../util/version';

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

export function researchTreesLoader() {
  return {
    name: 'research-trees-loader',
    schema: researchTreeSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const treesBasePath = `./generator/versions/${submodule}/output/research_trees`;
        if (!(await exists(treesBasePath))) {
          context.logger.warn(`Research trees path does not exist for version ${version.id}: ${treesBasePath}`);
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(treesBasePath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(treesBasePath, namespace);
          const trees = await getAllFilesInDirectory(treeSchemaInternal, namespacePath, true);

          for (const [treePath, treeData] of Object.entries(trees)) {
            const treeId = parseResourceLocationFromAbsolutePath(treesBasePath, treePath);
            const baseId = resourceLocationToWikiId(treeId);
            const id = getVersionCollectionId(baseId, version);

            const name = getRequiredTranslation(
              translations,
              `com.${treeId.namespace}.research.${treeId.path.replaceAll('/', '.')}.name`
            );

            const data = await context.parseData<z.infer<typeof researchTreeSchema>>({
              id,
              data: {
                baseId,
                version: {
                  collection: 'versions',
                  id: version.id
                },
                name,
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

      context.logger.info(`Loaded ${context.store.keys().length} research trees`);
    }
  } satisfies Loader;
}

export function researchLoader() {
  return {
    name: 'research-loader',
    schema: researchSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const researchBasePath = `./generator/versions/${submodule}/output/research`;
        if (!(await exists(researchBasePath))) {
          context.logger.warn(`Research path does not exist for version ${version.id}: ${researchBasePath}`);
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(researchBasePath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(researchBasePath, namespace);
          const researches = await getAllFilesInDirectory(researchSchemaInternal, namespacePath, true);

          for (const [researchPath, researchData] of Object.entries(researches)) {
            const researchId = parseResourceLocationFromAbsolutePath(researchBasePath, researchPath);
            const baseId = resourceLocationToWikiId(researchId);
            const id = getVersionCollectionId(baseId, version);

            const name = getRequiredTranslation(
              translations,
              `com.${researchId.namespace}.research.${researchId.path.replaceAll('/', '.')}.name`
            );
            const subtitle =
              translations[`com.${researchId.namespace}.research.${researchId.path.replaceAll('/', '.')}.subtitle`];

            const data = await context.parseData<z.infer<typeof researchSchema>>({
              id,
              data: {
                baseId,
                version: {
                  collection: 'versions',
                  id: version.id
                },
                tree: resourceLocationToWikiReference(
                  parseResourceLocation(researchData.branch),
                  version,
                  'research_tree'
                ),
                parent: researchData.parentResearch
                  ? resourceLocationToWikiReference(
                      parseResourceLocation(researchData.parentResearch),
                      version,
                      'research'
                    )
                  : undefined,
                name,
                subtitle,
                researchLevel: researchData.researchLevel,
                sortOrder: researchData.sortOrder,
                requirements: await parseRequirements(researchData, version),
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

      context.logger.info(`Loaded ${context.store.keys().length} research`);
    }
  } satisfies Loader;
}

export function researchEffectLoader() {
  return {
    name: 'research-effect-loader',
    schema: researchEffectsSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      for (const version of versions) {
        const submodule = version.submodule;
        const translations = await getTranslations(submodule);

        const effectsBasePath = `./generator/versions/${submodule}/output/research_effects`;
        if (!(await exists(effectsBasePath))) {
          context.logger.warn(`Research effects path does not exist for version ${version.id}: ${effectsBasePath}`);
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(effectsBasePath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(effectsBasePath, namespace);
          const effects = await getAllFilesInDirectory(effectSchemaInternal, namespacePath, true);

          for (const [effectPath, effectData] of Object.entries(effects)) {
            const effectId = parseResourceLocationFromAbsolutePath(effectsBasePath, effectPath);
            const baseId = resourceLocationToWikiId(effectId);
            const id = getVersionCollectionId(baseId, version);
            const fileId = path.parse(effectPath).name;

            if (fileId.startsWith('blockhut')) {
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
                    id: getVersionCollectionId(fileId.replace('blockhut', ''), version)
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
                  format: getRequiredTranslation(
                    translations,
                    `com.${effectId.namespace}.research.${effectId.path.replaceAll('/', '.')}.description`
                  ),
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

      context.logger.info(`Loaded ${context.store.keys().length} research effects`);
    }
  } satisfies Loader;
}

async function parseRequirements(
  researchData: z.infer<typeof researchSchemaInternal>,
  version: CollectionEntry<'versions'>['data']
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
            id: getVersionCollectionId(requirement.building.replace('minecolonies:', ''), version)
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
            id: getVersionCollectionId(building.replace('minecolonies:', ''), version)
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
  translations: Translations
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
      effect: resourceLocationToWikiReference(parseResourceLocation(effect.id), version, 'research_effect'),
      level: effect.level
    });
  }

  return values;
}

function getRequiredTranslation(translations: Translations, key: string) {
  const value = translations[key];
  if (!value) {
    throw new Error(`Missing translation key: ${key}`);
  }
  return value;
}
