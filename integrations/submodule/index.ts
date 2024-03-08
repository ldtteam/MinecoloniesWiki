import { AstroIntegration } from 'astro';
import path from 'path';
import shelljs from 'shelljs';

const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'minecolonies-submodule',
    hooks: {
      'astro:config:setup': async (config) => {
        shelljs.exec('git submodule init');

        shelljs.mkdir(path.join(process.cwd(), '.git/modules/minecolonies'));
        shelljs.cd(path.join(process.cwd(), '.git/modules/minecolonies'));
        shelljs.exec('git sparse-checkout init --cone --sparse-index');
        for (const directory of directoriesToPull) {
          shelljs.exec(`git sparse-checkout set '${directory}'`);
        }

        config.logger.info('Updating Minecolonies submodule:');
        shelljs.cd(process.cwd());
        shelljs.exec('git submodule update');
      }
    }
  };
}
