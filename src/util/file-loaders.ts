import type { z } from 'astro/zod';
import fs from 'fs/promises';

import { translationsSchema } from '../schemas/translations';
import { versionSchema } from '../schemas/version';
import { getJsonFile, parseYaml } from './files';

export async function getVersionsFromFile() {
  const res = await getJsonFile(versionSchema.array(), './src/data/wiki/versions.yaml', parseYaml);
  return res.toSorted((a, b) => a.order - b.order);
}

export async function getAllNamespacesInFolder(path: string) {
  return await fs
    .readdir(path, { withFileTypes: true })
    .then((res) => res.filter((dirent) => dirent.isDirectory()).map((m) => m.name));
}

export async function getTranslations(submodule: string): Promise<z.infer<typeof translationsSchema>> {
  return await getJsonFile(translationsSchema, `./generator/versions/${submodule}/output/lang/en_us.json`);
}
