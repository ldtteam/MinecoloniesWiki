import { parseFrontmatter } from '@astrojs/markdown-remark';
import fs from 'fs/promises';
import path from 'path';

export async function buildingLoader() {
  const values = [];

  const baseDir = 'src/content/wiki/buildings';
  const allFiles = await fs.readdir(baseDir, {
    encoding: 'utf-8',
    recursive: false,
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
