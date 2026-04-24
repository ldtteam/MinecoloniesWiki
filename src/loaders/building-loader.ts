import fs from 'node:fs/promises';
import path from 'node:path';

import { parseFrontmatter } from '@astrojs/markdown-remark';
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { reference } from 'astro:content';

import { buildingSchema } from '../schemas/building';
import { versionSchema } from '../schemas/version';
import { getJsonFile, parseYaml } from '../util/files';
import { getVersionCollectionId } from '../util/version';

const requirementSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('block'), item: z.string(), minAmount: z.number().default(1), note: z.string().optional() }),
  z.object({ type: z.literal('tag'), name: z.string(), note: z.string().optional() }),
  z.object({ type: z.literal('custom'), text: z.string() })
]);

const requirementsSchema = z.object({
  mandatory: z.array(requirementSchema).optional(),
  optional: z.array(requirementSchema).optional()
});

const rawBuildingSchema = z.object({
  id: z.string(),
  name: z.string(),
  plural: z.string(),
  description: z.string(),
  workers: reference('workers').array().optional(),
  singular: z.boolean().default(false),
  blockhutname: z.string().optional().or(z.string().array().optional()),
  rotation: z.number().optional(),
  requirements: requirementsSchema.optional(),
  overrides: z
    .array(
      z.object({
        version: reference('versions'),
        name: z.string().optional(),
        plural: z.string().optional(),
        description: z.string().optional(),
        workers: reference('workers').array().optional(),
        singular: z.boolean().optional(),
        blockhutname: z.string().optional().or(z.string().array().optional()),
        rotation: z.number().optional(),
        requirements: requirementsSchema.optional()
      })
    )
    .optional()
});

export function buildingLoader() {
  return {
    name: 'building-loader',
    schema: buildingSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);
      const sortedVersions = versions.toSorted((a, b) => a.order - b.order);

      const baseDir = 'src/content/wiki/buildings';
      const allFiles = await fs.readdir(baseDir, { withFileTypes: true });

      for (const file of allFiles.filter((f) => f.isFile())) {
        const buildingKey = path.parse(file.name).name;
        const content = await fs.readFile(path.resolve(baseDir, file.name), 'utf-8');
        const { frontmatter } = parseFrontmatter(content);
        const { overrides, workers, ...base } = rawBuildingSchema.parse(frontmatter);

        for (const version of sortedVersions) {
          const merged = { ...base };

          if (overrides) {
            for (const override of overrides) {
              const { version: overrideVersion, ...fields } = override;
              const overrideVersionData = versions.find((v) => v.id === overrideVersion.id);
              if (overrideVersionData && version.order >= overrideVersionData.order) {
                Object.assign(merged, fields);
              }
            }
          }

          const id = getVersionCollectionId(buildingKey, version);
          const data = await context.parseData({
            id,
            data: {
              ...merged,
              workers: workers?.map((w) => ({
                id: getVersionCollectionId(w.id, version),
                collection: 'workers'
              })),
              baseId: buildingKey,
              version: { id: version.id, collection: 'versions' }
            }
          });
          context.store.set({ id, data, digest: context.generateDigest(data) });
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} buildings`);
    }
  } satisfies Loader;
}
