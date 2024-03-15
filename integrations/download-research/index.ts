import type { AstroIntegration } from 'astro';

import { writeResearchEffects, writeResearchTrees } from './content-loader';
import { getJsonFile } from './file-manager';
import type { Translations } from './types';

export function downloadResearch(): AstroIntegration {
  let shouldRun = false;

  return {
    name: 'download-research',
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

        logger.info('Updating research info from Minecolonies submodule...');

        try {
          const modTranslations = await getJsonFile<Translations>(
            'minecolonies/src/main/resources/assets/minecolonies/lang/manual_en_us.json'
          );
          const researchTranslations = await getJsonFile<Translations>(
            'minecolonies/src/datagen/generated/minecolonies/assets/minecolonies/lang/default.json'
          );
          if (modTranslations == undefined || researchTranslations === undefined) {
            logger.warn('Could not load translation data, aborting file update.');
            return;
          }

          const translations = Object.assign({}, modTranslations, researchTranslations);

          await writeResearchEffects(translations);
          await writeResearchTrees(translations);

          logger.info('Finished updating research info from Minecolonies submodule.');
        } catch (ex) {
          logger.error('Stopped updating research info, unknown error occured:\n' + ex);
        }
      }
    }
  };
}
