import { AstroIntegration } from 'astro';

import { initSubmodule } from './update-minecolonies';

const name = 'minecolonies';
const branch = 'version/1.19.2';

const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'download-research',
    hooks: {
      'astro:config:setup': async () => {
        const module = await initSubmodule(name, branch, directoriesToPull);

        await module.update(1);
      }
    }
  };
}
