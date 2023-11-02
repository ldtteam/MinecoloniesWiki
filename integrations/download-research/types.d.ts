export interface FileInfo<T> {
  filename: string;
  content: T;
}

export interface ResearchTree {
  'branch-name': string;
}

export interface BuildingRequirement {
  building: string;
  level: number;
}

export interface MandatoryBuildingRequirement {
  'mandatory-building': string;
  level: number;
}

export interface ItemRequirement {
  item: string;
  quantity: number;
}

export type ResearchRequirement =
  | BuildingRequirement
  | MandatoryBuildingRequirement
  | ItemRequirement;

export type ResearchItem = {
  branch: string;
  parentResearch: string | undefined;
  requirements: ResearchRequirement[];
  effects: Record<string, number>[];
  researchLevel: number;
};

export type ResearchEffect = {
  effect: boolean;
  levels: number[] | undefined;
};
