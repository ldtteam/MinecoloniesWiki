export interface FileInfo<T> {
  filename: string;
  content: T;
}

export interface ResearchTree {
  'branch-name': string;
}

export interface BuildingRequirement {
  type: "";
  building: string;
  level: number;
}

export interface MandatoryBuildingRequirement {
  type: "";
  'mandatory-building': string;
  level: number;
}

export interface ItemListRequirement {
  type: "minecolonies:item_list";
  item: {
    items: string[];
  };
  quantity: number;
}

export interface ItemTagRequirement {
  type: "minecolonies:item_tag";
  item: {
    tag: string;
  };
  quantity: number;
}

export type ResearchRequirement =
  | BuildingRequirement
  | MandatoryBuildingRequirement
  | ItemListRequirement
  | ItemTagRequirement;

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
