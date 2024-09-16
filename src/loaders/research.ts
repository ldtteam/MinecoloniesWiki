import type { ValidContentEntrySlug } from 'astro:content';
import type { Research, ResearchRequirement, ResearchTree } from 'src/content/_research';

import { getAllJsonFiles, getTranslations, type Translations } from './common';
import { researchTreeLoader } from './research_tree';

export interface BuildingRequirementInternal {
  type: '';
  building: string;
  level: number;
}

export interface MandatoryBuildingRequirementInternal {
  type: '';
  'mandatory-building': string;
  level: number;
}

export interface ItemListRequirementInternal {
  type: 'minecolonies:item_list';
  item: {
    items: string[];
  };
  quantity: number;
}

export interface ItemTagRequirementInternal {
  type: 'minecolonies:item_tag';
  item: {
    tag: string;
  };
  quantity: number;
}

export type ResearchRequirementInternal =
  | BuildingRequirementInternal
  | MandatoryBuildingRequirementInternal
  | ItemListRequirementInternal
  | ItemTagRequirementInternal;

export interface ResearchItemInternal {
  branch: string;
  parentResearch: string | undefined;
  requirements: ResearchRequirementInternal[];
  effects: Record<string, number>[];
  researchLevel: number;
}

export async function researchLoader(): Promise<Research[]> {
  const translations = await getTranslations();
  if (translations === undefined) {
    throw new Error('Failed to load translations, unable to generate ');
  }
  const researchTrees = await researchTreeLoader();

  const researches: Research[] = [];
  for (const tree of researchTrees) {
    const treeResearches = await parseTreeResearches(tree, translations);
    researches.push(...treeResearches);
  }
  return researches;
}

async function parseTreeResearches(tree: ResearchTree, translations: Translations): Promise<Research[]> {
  const allResearches = await getAllJsonFiles<ResearchItemInternal>(
    `minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/${tree.id}`
  );

  return Object.entries(allResearches).map(([researchFilename, research]) => {
    const researchKey = researchFilename.replace('.json', '');
    const requirements = research.requirements
      .map((requirement) => parseRequirement(requirement, translations))
      .filter((f) => f !== undefined);

    const effects = research.effects.reduce<Record<string, number>>((prev, effect) => {
      Object.entries(effect).forEach(([key, value]) => {
        prev[key.replace('minecolonies:effects/', '')] = value;
      });
      return prev;
    }, {});

    const researchLevel = research.researchLevel;
    return {
      id: researchKey,
      tree: tree.id,
      parent: research.parentResearch?.split('/')[1],
      name: translations[`com.minecolonies.research.${tree.id}.${researchKey}.name`],
      requirements,
      effects,
      researchLevel
    };
  });
}

function parseRequirement(
  requirement: ResearchRequirementInternal,
  translations: Translations
): ResearchRequirement | undefined {
  if (isBuildingRequirement(requirement)) {
    return {
      type: 'building',
      building: {
        collection: 'wiki',
        slug: ('buildings/' + requirement.building) as ValidContentEntrySlug<'wiki'>
      },
      level: requirement.level
    };
  } else if (isMandatoryBuildingRequirement(requirement)) {
    return {
      type: 'building',
      building: {
        collection: 'wiki',
        slug: ('buildings/' + requirement['mandatory-building']) as ValidContentEntrySlug<'wiki'>
      },
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

function isBuildingRequirement(requirement: ResearchRequirementInternal): requirement is BuildingRequirementInternal {
  return Object.keys(requirement).includes('building');
}

function isMandatoryBuildingRequirement(
  requirement: ResearchRequirementInternal
): requirement is MandatoryBuildingRequirementInternal {
  return Object.keys(requirement).includes('mandatory-building');
}

function isItemListRequirement(requirement: ResearchRequirementInternal): requirement is ItemListRequirementInternal {
  return requirement.type === 'minecolonies:item_list';
}

function isItemTagRequirement(requirement: ResearchRequirementInternal): requirement is ItemTagRequirementInternal {
  return requirement.type === 'minecolonies:item_tag';
}
