import { getAllJsonFiles, writeContentCollectionFile } from './file-manager';
import { ResearchEffect, ResearchItem, ResearchRequirement, ResearchTree, Translations } from './types';
import {
  isBuildingRequirement,
  isItemListRequirement,
  isItemTagRequirement,
  isMandatoryBuildingRequirement
} from './util';

export async function writeResearchEffects(translations: Translations) {
  const researchEffects = await getAllJsonFiles<ResearchEffect>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/effects'
  );
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

    writeContentCollectionFile('research_effect', filename, JSON.stringify(content));
  }
}

export async function writeResearchTrees(translations: Translations) {
  const researchTrees = await getAllJsonFiles<ResearchTree>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );
  for (const [filename, researchTree] of Object.entries(researchTrees)) {
    const name = translations[researchTree['branch-name']];
    writeContentCollectionFile(
      'research_tree',
      filename,
      JSON.stringify({
        name
      })
    );

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

      writeContentCollectionFile(
        'research',
        researchFilename,
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
}

export function parseRequirement(requirement: ResearchRequirement, translations: Translations) {
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
