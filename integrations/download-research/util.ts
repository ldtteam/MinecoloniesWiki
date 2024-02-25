import type {
  BuildingRequirement,
  ItemListRequirement,
  ItemTagRequirement,
  MandatoryBuildingRequirement,
  ResearchRequirement
} from './types';

export function isBuildingRequirement(requirement: ResearchRequirement): requirement is BuildingRequirement {
  return Object.keys(requirement).includes('building');
}

export function isMandatoryBuildingRequirement(
  requirement: ResearchRequirement
): requirement is MandatoryBuildingRequirement {
  return Object.keys(requirement).includes('mandatory-building');
}

export function isItemListRequirement(requirement: ResearchRequirement): requirement is ItemListRequirement {
  return requirement.type === 'minecolonies:item_list';
}

export function isItemTagRequirement(requirement: ResearchRequirement): requirement is ItemTagRequirement {
  return requirement.type === 'minecolonies:item_tag';
}
