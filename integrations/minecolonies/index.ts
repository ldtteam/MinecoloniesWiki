import { type AstroIntegration } from 'astro';
import shelljs from 'shelljs';

import { processResearch } from './content-collections';
import getTranslations from './translations';

export function minecoloniesSubmodule(): AstroIntegration {
  let shouldRun = false;

  return {
    name: 'minecolonies-submodule',
    hooks: {
      'astro:config:setup': ({ command }) => {
        if (command === 'dev') {
          shouldRun = true;
        }
      },
      'astro:config:done': async ({ logger }) => {
        if (!shouldRun) {
          return;
        }

        logger.info('Updating Minecolonies submodule...');
        const response = shelljs.exec('git submodule update --init --remote --merge minecolonies');
        logger.info('Minecolonies submodule successfully updated');

        if (response.code !== 0) {
          throw new Error('Failure updating submodule.');
        }

        try {
          const translations = await getTranslations();
          if (translations === undefined) {
            logger.warn('Could not load translation data, aborting file update.');
            return;
          }

          await processResearch({ logger, translations });

          logger.info('Finished updating info from Minecolonies submodule.');
        } catch (ex) {
          logger.error('Stopped updating info, unknown error occured:\n' + ex);
        }
      }
    }
  };
}
