import type { AstroIntegration } from 'astro';
import fs from 'fs/promises';
import path from 'path';

const IMAGE_URL_PATTERN = /\/images\/wiki\/(items|blocks)\/[^\s"'<>)]+\.png/g;

async function* walkDir(dir: string): AsyncGenerator<string> {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(full);
    } else {
      yield full;
    }
  }
}

export default function imagePruner(): AstroIntegration {
  return {
    name: 'image-pruner',
    hooks: {
      'astro:build:done': async ({ logger, dir }) => {
        const distDir = dir.pathname.replace(/^\/([A-Za-z]:)/, '$1');
        const imageDir = path.join(distDir, 'images/wiki');

        logger.info('Scanning for referenced item/block images...');

        const referenced = new Set<string>();

        for await (const file of walkDir(distDir)) {
          if (file.includes(path.join('images', 'wiki'))) {
            continue;
          }

          const content = await fs.readFile(file, 'utf-8').catch(() => null);
          if (content === null) {
            continue;
          }

          for (const match of content.matchAll(IMAGE_URL_PATTERN)) {
            referenced.add(match[0]);
          }
        }

        logger.info(`Found ${referenced.size} referenced images. Pruning unreferenced...`);

        let kept = 0;
        let pruned = 0;
        let prunedBytes = 0;

        for await (const file of walkDir(imageDir)) {
          const url = '/' + path.relative(distDir, file).replaceAll(path.sep, '/');

          if (referenced.has(url)) {
            kept++;
          } else {
            const stat = await fs.stat(file);
            prunedBytes += stat.size;
            await fs.rm(file);
            pruned++;
          }
        }

        const mb = (prunedBytes / 1024 / 1024).toFixed(1);
        logger.info(`Done. Kept: ${kept}, Pruned: ${pruned} (${mb} MB freed).`);
      }
    }
  };
}
