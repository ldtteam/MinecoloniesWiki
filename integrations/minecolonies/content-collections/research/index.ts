import { type AstroIntegrationLogger } from 'astro';

import { getAllJsonFiles, writeContentCollectionFile } from '../../file-manager';
import type { Translations } from '../../translations/types';
import type {
  BuildingRequirement,
  ItemListRequirement,
  ItemTagRequirement,
  MandatoryBuildingRequirement,
  ResearchEffect,
  ResearchItem,
  ResearchRequirement,
  ResearchTree
} from './types';

interface Props {
  logger: AstroIntegrationLogger;
  translations: Translations;
}

function isBuildingRequirement(requirement: ResearchRequirement): requirement is BuildingRequirement {
  return Object.keys(requirement).includes('building');
}

function isMandatoryBuildingRequirement(requirement: ResearchRequirement): requirement is MandatoryBuildingRequirement {
  return Object.keys(requirement).includes('mandatory-building');
}

function isItemListRequirement(requirement: ResearchRequirement): requirement is ItemListRequirement {
  return requirement.type === 'minecolonies:item_list';
}

function isItemTagRequirement(requirement: ResearchRequirement): requirement is ItemTagRequirement {
  return requirement.type === 'minecolonies:item_tag';
}

async function writeResearchEffects(translations: Translations) {
  const researchEffects = await getAllJsonFiles<ResearchEffect>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/effects'
  );

  let totalEntries = 0;
  let updatedEntries = 0;
  for (const [filename, researchEffect] of Object.entries(researchEffects)) {
    const effectKey = filename.replace('.json', '');

    let content: unknown;
    if (filename.startsWith('blockhut')) {
      content = {
        type: 'building',
        building: effectKey.replace('blockhut', '')
      };
    } else {
      content = {
        type: 'regular',
        format: translations[`com.minecolonies.research.effects.${effectKey}.description`],
        levels: researchEffect.levels
      };
    }

    totalEntries++;
    if (await writeContentCollectionFile('research_effect', filename, JSON.stringify(content))) {
      updatedEntries++;
    }
  }

  return {
    totalEntries,
    updatedEntries
  };
}

async function writeResearchTrees(translations: Translations) {
  const researchTrees = await getAllJsonFiles<ResearchTree>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );

  let totalTreeEntries = 0;
  let updatedTreeEntries = 0;
  let totalResearchEntries = 0;
  let updatedResearchEntries = 0;

  for (const [filename, researchTree] of Object.entries(researchTrees)) {
    const name = translations[researchTree['branch-name']];
    const researchTreeContent = JSON.stringify({ name });

    totalTreeEntries++;
    if (await writeContentCollectionFile('research_tree', filename, researchTreeContent)) {
      updatedTreeEntries++;
    }

    const researchTreeType = filename.replace('.json', '');
    const allResearches = await getAllJsonFiles<ResearchItem>(
      `minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/${researchTreeType}`
    );

    for (const [researchFilename, research] of Object.entries(allResearches)) {
      const researchKey = researchFilename.replace('.json', '');
      const tree = research.branch.split(':').pop();
      const parent = research.parentResearch?.split('/').pop();
      const name = translations[`com.minecolonies.research.${researchTreeType}.${researchKey}.name`];
      const requirements = research.requirements
        .map((requirement) => parseRequirement(requirement, translations))
        .filter((f) => f !== undefined);

      const effects: Record<string, number> = {};
      research.effects.forEach((effect) => {
        Object.entries(effect).forEach(([key, value]) => {
          effects[key.replace('minecolonies:effects/', '')] = value;
        });
      });

      const researchLevel = research.researchLevel;
      const researchContent = JSON.stringify({ tree, parent, name, requirements, effects, researchLevel });

      totalResearchEntries++;
      if (await writeContentCollectionFile('research', researchFilename, researchContent)) {
        updatedResearchEntries++;
      }
    }
  }

  return {
    totalTreeEntries,
    updatedTreeEntries,
    totalResearchEntries,
    updatedResearchEntries
  };
}

function parseRequirement(requirement: ResearchRequirement, translations: Translations) {
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
      items: requirement.item.items.map((item) => item.replace(':', '/')),
      quantity: requirement.quantity
    };
  } else if (isItemTagRequirement(requirement)) {
    return {
      type: 'item',
      items: [translations[`com.minecolonies.coremod.research.tags.${requirement.item.tag}`]],
      quantity: requirement.quantity
    };
  }
  return undefined;
}

export default async function handleResearch({ translations, logger }: Props) {
  logger.info('Updating research info from Minecolonies submodule...');

  const effectData = await writeResearchEffects(translations);
  const researchData = await writeResearchTrees(translations);

  logger.info(
    ` > Checking ${researchData.totalTreeEntries} research trees. Updated ${researchData.updatedTreeEntries} research trees.`
  );
  logger.info(
    ` > Checking ${researchData.totalResearchEntries} researches. Updated ${researchData.updatedResearchEntries} researches.`
  );
  logger.info(
    ` > Checking ${effectData.totalEntries} research effects. Updated ${effectData.updatedEntries} research effects.`
  );
}
