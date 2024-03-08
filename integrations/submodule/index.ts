import { AstroIntegration } from 'astro';

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

        await module.update(1);
      }
    }
  };
}
