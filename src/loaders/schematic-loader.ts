import fs from 'node:fs/promises';
import path from 'node:path';

import type { Loader } from 'astro/loaders';

import { rawSchematicPackSchema } from '../schemas/schematics';
import { getVersionsFromFile } from '../util/file-loaders';
import { parseYaml } from '../util/files';
import { getVersionCollectionId } from '../util/version';

export function schematicLoader() {
  return {
    name: 'schematic-loader',
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();

      const baseDir = 'src/data/schematics';
      const allFiles = await fs.readdir(baseDir, { withFileTypes: true });

      for (const file of allFiles.filter((f) => f.isFile() && f.name.endsWith('.yaml'))) {
        const absoluteFilePath = path.resolve(baseDir, file.name);
        const relativeFilePath = path.relative('.', absoluteFilePath);
        const content = await fs.readFile(absoluteFilePath, 'utf-8');
        const pack = rawSchematicPackSchema.parse(parseYaml(content));

        for (const version of versions) {
          const versionedSchematics = pack.schematics.map((schematic) => {
            if (schematic.type === 'building') {
              return {
                ...schematic,
                building: {
                  id: getVersionCollectionId(schematic.building.id, version),
                  collection: 'buildings' as const
                }
              };
            }
            return schematic;
          });

          const id = getVersionCollectionId(pack.id, version);
          const data = await context.parseData({
            id,
            filePath: relativeFilePath,
            data: {
              displayName: pack.displayName,
              authors: pack.authors,
              schematics: versionedSchematics,
              baseId: pack.id,
              version: { id: version.id, collection: 'versions' as const }
            }
          });
          context.store.set({ id, data, filePath: relativeFilePath, digest: context.generateDigest(data) });
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} schematic packs`);
    }
  } satisfies Loader;
}
