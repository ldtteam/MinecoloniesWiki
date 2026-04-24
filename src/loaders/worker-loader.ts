import fs from 'node:fs/promises';
import path from 'node:path';

import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { reference } from 'astro:content';

import { versionSchema } from '../schemas/version';
import { getJsonFile, parseYaml } from '../util/files';
import { getVersionCollectionId } from '../util/version';

const traitSchema = z.object({
  name: z.string(),
  effect: z.string()
});

const rawWorkerSchema = z.object({
  name: z.string(),
  plural: z.string(),
  description: z.string(),
  icon: z.string(),
  type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']),
  traits: z.object({
    primary: traitSchema.optional(),
    secondary: traitSchema.optional()
  }),
  primaryBuilding: z.string(),
  overrides: z
    .array(
      z.object({
        version: reference('versions'),
        name: z.string().optional(),
        plural: z.string().optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
        type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']).optional(),
        traits: z
          .object({
            primary: traitSchema.partial().optional(),
            secondary: traitSchema.partial().optional()
          })
          .optional(),
        primaryBuilding: z.string().optional()
      })
    )
    .optional()
});

export function workerLoader() {
  return {
    name: 'worker-loader',
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);
      const sortedVersions = versions.toSorted((a, b) => a.order - b.order);

      const baseDir = 'src/data/wiki/workers';
      const allFiles = await fs.readdir(baseDir, { withFileTypes: true });

      for (const file of allFiles.filter((f) => f.isFile() && f.name.endsWith('.yaml'))) {
        const workerKey = path.parse(file.name).name;
        const filePath = path.resolve(baseDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');
        const raw = rawWorkerSchema.parse(parseYaml(content));
        const { overrides, primaryBuilding, traits, ...base } = raw;
        const relativeFilePath = path.relative('.', filePath);

        for (const version of sortedVersions) {
          const merged = { ...base, primaryBuilding, traits };

          if (overrides) {
            for (const override of overrides) {
              const { version: overrideVersion, traits: overrideTraits, ...fields } = override;
              const overrideVersionData = versions.find((v) => v.id === overrideVersion.id);
              if (overrideVersionData && version.order >= overrideVersionData.order) {
                Object.assign(merged, fields);
                if (overrideTraits) {
                  const primary =
                    overrideTraits.primary && merged.traits.primary
                      ? {
                          name: overrideTraits.primary.name ?? merged.traits.primary.name,
                          effect: overrideTraits.primary.effect ?? merged.traits.primary.effect
                        }
                      : merged.traits.primary;
                  const secondary =
                    overrideTraits.secondary && merged.traits.secondary
                      ? {
                          name: overrideTraits.secondary.name ?? merged.traits.secondary.name,
                          effect: overrideTraits.secondary.effect ?? merged.traits.secondary.effect
                        }
                      : merged.traits.secondary;
                  merged.traits = { primary, secondary };
                }
              }
            }
          }

          const { primaryBuilding: mergedPrimaryBuilding, ...mergedRest } = merged;
          const id = getVersionCollectionId(workerKey, version);
          const data = await context.parseData({
            id,
            filePath: relativeFilePath,
            data: {
              ...mergedRest,
              primaryBuilding: {
                id: getVersionCollectionId(mergedPrimaryBuilding, version),
                collection: 'buildings'
              },
              baseId: workerKey,
              version: { id: version.id, collection: 'versions' }
            }
          });
          context.store.set({ id, data, filePath: relativeFilePath, digest: context.generateDigest(data) });
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} workers`);
    }
  } satisfies Loader;
}
