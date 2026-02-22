import type { AstroIntegration, AstroIntegrationLogger } from 'astro';
import fs from 'fs/promises';
import path from 'path';

import { getVersionsFromFile } from '../util/file-loaders';

export default function symlinkBuilder(): AstroIntegration {
  return {
    name: 'symlink-builder',
    hooks: {
      'astro:config:setup': ({ updateConfig, command }) => {
        if (command !== 'dev') {
          return;
        }

        // Remove the symlinked folders from HMR, due to the sheer amount of files dumped to the public folder node is running into file watching limits
        updateConfig({
          vite: {
            server: {
              watch: {
                ignored: ['**/public/images/wiki/blocks', '**/public/images/wiki/items']
              }
            }
          }
        });
      },
      'astro:server:start': ({ logger }) => createSymlinks(logger),
      'astro:build:setup': ({ logger }) => createSymlinks(logger)
    }
  };
}

async function createSymlinks(logger: AstroIntegrationLogger) {
  const submodules = await getVersionsFromFile().then((res) => new Set(res.map((r) => r.submodule)));

  // Block images symlinks
  logger.info('Creating symlinks for block images...');
  await prepareDirectory('./public/images/wiki/blocks');
  for (const submodule of submodules) {
    await fs.symlink(
      path.resolve(`./generator/versions/${submodule}/output/block_images`),
      `./public/images/wiki/blocks/${submodule}`,
      'junction'
    );
  }

  // Item images symlinks
  logger.info('Creating symlinks for item images...');
  await prepareDirectory('./public/images/wiki/items');
  for (const submodule of submodules) {
    await fs.symlink(
      path.resolve(`./generator/versions/${submodule}/output/item_images`),
      `./public/images/wiki/items/${submodule}`,
      'junction'
    );
  }
}

async function prepareDirectory(directory: string) {
  await fs.rm(directory, { recursive: true, force: true });
  await fs.mkdir(directory);
  await fs.writeFile(path.resolve(directory, '.gitignore'), '*\n!.gitignore');
}
