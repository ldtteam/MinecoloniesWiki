import { AstroIntegration } from 'astro';

import { initSubmodule } from './update-minecolonies';

const name = 'minecolonies';
const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'minecolonies-submodule',
    hooks: {
      'astro:config:setup': async (config) => {
        const module = await initSubmodule(name, directoriesToPull);

        config.logger.info('Updating Minecolonies submodule:');
        await module.update(1);
      }
    }
  };
}
