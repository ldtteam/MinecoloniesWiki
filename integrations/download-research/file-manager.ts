import { fileURLToPath } from 'node:url';

import type { CollectionKey } from 'astro:content';
import * as fs from 'fs/promises';
import * as path from 'path';

export async function getCacheBuster(cacheDir: URL): Promise<Date | undefined> {
  const fullPath = path.resolve(
    fileURLToPath(cacheDir),
    'download-research-cache.json'
  );
  try {
    const json = await fs.readFile(fullPath);
    return new Date(JSON.parse(json.toString()).date);
  } catch {
    return undefined;
  }
}

export async function writeCacheBuster(cacheDir: URL, date: Date) {
  const fullPath = path.resolve(
    fileURLToPath(cacheDir),
    'download-research-cache.json'
  );
  try {
    await fs.mkdir(fileURLToPath(cacheDir), {
      recursive: true
    });
    await fs.writeFile(
      fullPath,
      JSON.stringify({
        date: date.getTime()
      })
    );
    return true;
  } catch {
    return false;
  }
}

export async function writeContentCollectionFile(
  key: CollectionKey,
  name: string,
  content: string
) {
  const fullPath = path.resolve(`src/content/${key}`);
  await fs.writeFile(`${fullPath}${path.sep}${name}`, content);
}
