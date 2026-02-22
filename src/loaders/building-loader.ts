import fs from 'node:fs/promises';
import path from 'node:path';

import { parseFrontmatter } from '@astrojs/markdown-remark';

export async function buildingLoader() {
  const values = [];

  const baseDir = 'src/content/wiki/buildings';
  const allFiles = await fs.readdir(baseDir, {
    withFileTypes: true
  });
  const buildings = await Promise.all(
    allFiles
      .filter((f) => f.isFile())
      .map(async (file) => ({ file: file, output: await fs.readFile(path.resolve(baseDir, file.name), 'utf-8') }))
  );
  for (const building of buildings) {
    const buildingKey = path.parse(building.file.name).name;
    const result = parseFrontmatter(building.output);
    values.push({
      id: buildingKey,
      ...result.frontmatter
    });
  }

  return values;
}
