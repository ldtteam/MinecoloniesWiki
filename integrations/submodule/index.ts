import { AstroIntegration } from 'astro';
import shelljs from 'shelljs';

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'minecolonies-submodule',
    hooks: {
      'astro:config:setup': async ({ logger }) => {
        logger.info('Updating Minecolonies submodule...');
        const response = shelljs.exec('git submodule update --init minecolonies');
        logger.info('Minecolonies submodule successfully updated');

        if (response.code !== 0) {
          throw new Error('Failure updating submodule.');
        }
      }
    }
  };
}
