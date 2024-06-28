import type { MarkdocBuildingComponent } from '@utils/building';

export interface BaseBuildingContentBlockProps extends MarkdocBuildingComponent {
  order?: number;
  cols?: number;
}

export interface BuildingCraftingContentBlockProps extends BaseBuildingContentBlockProps {
  noTeach: boolean;
  noRemove: boolean;
}
