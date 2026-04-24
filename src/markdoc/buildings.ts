import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export interface MarkdocBuildingComponent {
  name?: string;
}

export const building: Tag = {
  render: component('./src/components/wiki/building/names/MarkdocBuildingName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

const defaultContentBlockAttributes: Tag['attributes'] = {
  order: {
    type: Number,
    required: false,
    default: 1
  },
  cols: {
    type: Number,
    required: false,
    default: 4,
    validate: (value) => {
      if (value < 1 && value > 12) {
        return [
          {
            id: 'cols-invalid-value',
            level: 'error',
            message: 'Cols must be between 1 and 12 (inclusive)'
          }
        ];
      }
      return [];
    }
  }
};

const customContentAttributes: Tag['attributes'] = {
  ...defaultContentBlockAttributes,
  header: {
    type: String,
    required: false
  },
  imageKey: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
};

const craftingContentBlockAttributes: Tag['attributes'] = {
  ...defaultContentBlockAttributes,
  noTeach: {
    type: Boolean,
    required: false,
    default: false
  },
  noRemove: {
    type: Boolean,
    required: false,
    default: false
  }
};

export const contentBlocks: Record<string, Tag> = {
  brewing_recipes: {
    render: component('./src/components/wiki/content/blocks/MarkdocBrewingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  crafting_recipes: {
    render: component('./src/components/wiki/content/blocks/MarkdocCraftingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  custom: {
    render: component('./src/components/wiki/content/blocks/MarkdocCustom.astro'),
    attributes: customContentAttributes
  },
  do_recipes: {
    render: component('./src/components/wiki/content/blocks/MarkdocDoRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  fields: {
    render: component('./src/components/wiki/content/blocks/MarkdocFields.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  fuel: {
    render: component('./src/components/wiki/content/blocks/MarkdocFuel.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  hostiles: {
    render: component('./src/components/wiki/content/blocks/MarkdocHostiles.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  item_list: {
    render: component('./src/components/wiki/content/blocks/MarkdocItemList.astro'),
    attributes: {
      ...customContentAttributes,
      defaultOn: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  },
  main: {
    render: component('./src/components/wiki/content/blocks/MarkdocMain.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  main_residential: {
    render: component('./src/components/wiki/content/blocks/MarkdocMainResidential.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  required_resources: {
    render: component('./src/components/wiki/content/blocks/MarkdocRequiredResources.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  settings: {
    render: component('./src/components/wiki/content/blocks/MarkdocSettings.astro'),
    selfClosing: false,
    attributes: defaultContentBlockAttributes
  },
  smelting_recipes: {
    render: component('./src/components/wiki/content/blocks/MarkdocSmeltingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  stock: {
    render: component('./src/components/wiki/content/blocks/MarkdocStock.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  tasks: {
    render: component('./src/components/wiki/content/blocks/MarkdocTasks.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  work_orders: {
    render: component('./src/components/wiki/content/blocks/MarkdocWorkOrders.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  statistics: {
    render: component('./src/components/wiki/content/blocks/MarkdocStatistics.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  }
};

export const building_requirements_table: Tag = {
  render: component('./src/components/wiki/building/BuildingRequirementsTable.astro'),
  selfClosing: true
};
