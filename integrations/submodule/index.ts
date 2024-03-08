import { AstroIntegration } from 'astro';
import shelljs from 'shelljs';

import { initSubmodule } from './update-minecolonies';

const url = 'git@github.com:ldtteam/minecolonies.git';
const name = 'minecolonies';
const branch = 'version/main';

const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'download-research',
    hooks: {
      'astro:config:setup': async () => {
        const module = await initSubmodule(url, name);

        // shelljs.cd(module.path());
        // shelljs.exec('git sparse-checkout init --cone --sparse-index');
        // for (const directory of directoriesToPull) {
        //   shelljs.exec(`git sparse-checkout set '${directory}'`);
        // }

        await module.update(1);
      }
    }
  };
}
