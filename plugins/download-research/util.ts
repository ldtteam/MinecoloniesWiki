import type {
  BuildingRequirement,
  ItemRequirement,
  MandatoryBuildingRequirement,
  ResearchRequirement
} from './types';

export function isBuildingRequirement(
  requirement: ResearchRequirement
): requirement is BuildingRequirement {
  return Object.keys(requirement).includes('building');
}

export function isMandatoryBuildingRequirement(
  requirement: ResearchRequirement
): requirement is MandatoryBuildingRequirement {
  return Object.keys(requirement).includes('mandatory-building');
}

export function isItemRequirement(
  requirement: ResearchRequirement
): requirement is ItemRequirement {
  return Object.keys(requirement).includes('item');
}

export function computeResearchEffectTranslation(
  translations: Record<string, string>,
  key: string
) {
  if (key.startsWith('blockhut')) {
    return `Unlocks {building:${key.replace('blockhut', '')}}`;
  }
  return translations[`com.minecolonies.research.effects.${key}.description`];
}
