export interface BaseContentBlockProps {
  name: string;
  order?: number;
  cols?: number;
}

export interface CraftingContentBlockProps extends BaseContentBlockProps {
  noTeach: boolean;
  noRemove: boolean;
}
