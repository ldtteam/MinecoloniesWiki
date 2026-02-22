import type { MarkdocBuildingComponent } from '../../../markdoc/buildings';

export interface BaseBuildingContentBlockProps extends MarkdocBuildingComponent {
  order?: number;
  cols?: number;
}

export interface BuildingCraftingContentBlockProps extends BaseBuildingContentBlockProps {
  noTeach: boolean;
  noRemove: boolean;
}
