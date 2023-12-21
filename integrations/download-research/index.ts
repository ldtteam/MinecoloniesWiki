import type { AstroIntegration } from 'astro';
import { addHours } from 'date-fns';
import { loadEnv } from 'vite';

import {
  getCacheBuster,
  writeCacheBuster,
  writeContentCollectionFile
} from './file-manager';
import { ContentLoader } from './load-content';
import type { ResearchEffect, ResearchItem, ResearchTree } from './types';
import {
  computeResearchEffectTranslation,
  isBuildingRequirement,
  isItemListRequirement,
  isItemTagRequirement,
  isMandatoryBuildingRequirement
} from './util';

/**
 * The options for the download research integration.
 */
interface IntegrationOptions {
  /**
   * Whether the data will be attempted to be downloaded on first start of the dev server.
   */
  runOnStart?: boolean;
  /**
   * Whether the data will be attempted to be downloaded again upon a config file reload.
   */
  runOnReload?: boolean;
  /**
   * The amount of time (in hours) that the cached files are still considered valid and do not have to be reloaded.
   */
  cacheValidityTime?: number;
}

export function downloadResearch(
  options?: IntegrationOptions
): AstroIntegration {
  const runOnStart = options?.runOnStart ?? true;
  const runOnReload = options?.runOnReload ?? false;
  const cacheValidityTime = options?.cacheValidityTime ?? 168;

  let shouldRun = true;

  return {
    name: 'download-research',
    hooks: {
      'astro:config:setup': async ({ command, isRestart }) => {
        shouldRun = true;
        if (
          command !== 'dev' ||
          (isRestart ? false : !runOnStart) ||
          (isRestart ? !runOnReload : false)
        ) {
          shouldRun = false;
        }
      },
      'astro:config:done': async ({ config, logger }) => {
        if (!shouldRun) {
          return;
        }

        const now = new Date();
        const date = await getCacheBuster(config.cacheDir);
        if (date !== undefined && now <= addHours(date, cacheValidityTime)) {
          logger.info(
            'Skipping downloading research info from Minecolonies repo, using previous cached data.'
          );
          return;
        }

        logger.info('Downloading research info from Minecolonies repo.');

        const { SECRET_GH_PAT } = loadEnv(
          process.env.NODE_ENV!,
          process.cwd(),
          ''
        );
        const contentLoader = new ContentLoader(SECRET_GH_PAT);

        const modTranslations = await contentLoader.getJsonFile(
          'src/main/resources/assets/minecolonies/lang/manual_en_us.json'
        );
        const researchTranslations = await contentLoader.getJsonFile(
          'src/datagen/generated/minecolonies/assets/minecolonies/lang/default.json'
        );
        if (modTranslations == undefined || researchTranslations === undefined) {
          logger.warn('Could not load translation data, aborting file update.');
          return;
        }

        const researchEffects =
          await contentLoader.getAllJsonFiles<ResearchEffect>(
            'src/datagen/generated/minecolonies/data/minecolonies/researches/effects'
          );
        for (const researchEffect of researchEffects) {
          writeContentCollectionFile(
            'research_effect',
            researchEffect.filename,
            JSON.stringify({
              format: computeResearchEffectTranslation(
                researchTranslations.content,
                researchEffect.filename.replace('.json', '')
              ),
              levels: researchEffect.content.levels
            })
          );
        }

        const researchTrees = await contentLoader.getAllJsonFiles<ResearchTree>(
          'src/datagen/generated/minecolonies/data/minecolonies/researches'
        );
        for (const researchTree of researchTrees) {
          const name =
            researchTranslations.content[researchTree.content['branch-name']];
          writeContentCollectionFile(
            'research_tree',
            researchTree.filename,
            JSON.stringify({
              name
            })
          );

          const researchTreeType = researchTree.filename.replace('.json', '');
          const allResearches =
            await contentLoader.getAllJsonFiles<ResearchItem>(
              `src/datagen/generated/minecolonies/data/minecolonies/researches/${researchTreeType}`
            );

          for (const research of allResearches) {
            const researchKey = research.filename.replace('.json', '');
            const tree = research.content.branch.split(':').pop();
            const parent = research.content.parentResearch?.split('/').pop();
            const name =
              researchTranslations.content[
              `com.minecolonies.research.${researchTreeType}.${researchKey}.name`
              ];
            const requirements = research.content.requirements
              .map((requirement) => {
                if (isBuildingRequirement(requirement)) {
                  return {
                    type: 'building',
                    building: requirement.building,
                    level: requirement.level
                  };
                } else if (isMandatoryBuildingRequirement(requirement)) {
                  return {
                    type: 'building',
                    building: requirement['mandatory-building'],
                    level: requirement.level
                  };
                } else if (isItemListRequirement(requirement)) {
                  return {
                    type: 'item',
                    items: requirement.item.items,
                    quantity: requirement.quantity
                  };
                } else if (isItemTagRequirement(requirement)) {
                  return {
                    type: 'item',
                    items: [modTranslations.content[`com.minecolonies.coremod.research.tags.${requirement.item.tag}`]],
                    quantity: requirement.quantity
                  };
                }
                return undefined;
              })
              .filter((f) => f !== undefined);

            const effects: Record<string, number> = {};
            research.content.effects.forEach((effect) => {
              Object.entries(effect).forEach(([key, value]) => {
                effects[key.replace('minecolonies:effects/', '')] = value;
              });
            });

            const researchLevel = research.content.researchLevel;

            writeContentCollectionFile(
              'research',
              research.filename,
              JSON.stringify({
                tree,
                parent,
                name,
                requirements,
                effects,
                researchLevel
              })
            );
          }
        }

        if (!(await writeCacheBuster(config.cacheDir, new Date()))) {
          logger.warn(
            'Failure writing cache buster, next run will attempt to load all info again.'
          );
        }

        logger.info(
          'Finished downloading research info from Minecolonies repo.'
        );
      }
    }
  };
}
