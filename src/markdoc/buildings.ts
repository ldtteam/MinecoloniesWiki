import { component } from '@astrojs/markdoc/config';
import type { CollectionEntry } from 'astro:content';

import { injectFrontmatter } from './mixin';
import type { Tag } from './types';

export interface MarkdocBuildingComponent {
  currentPage?: string;
  frontmatter?: CollectionEntry<'wiki'>['data'];
  name?: string;
}

export const building: Tag = {
  render: component('@components/markdoc/names/BuildingName.astro'),
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
  },
  transform: injectFrontmatter
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
    render: component('@components/markdoc/content/blocks/BrewingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: injectFrontmatter
  },
  crafting_recipes: {
    render: component('@components/markdoc/content/blocks/CraftingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: injectFrontmatter
  },
  custom: {
    render: component('@components/markdoc/content/blocks/Custom.astro'),
    attributes: customContentAttributes,
    transform: injectFrontmatter
  },
  do_recipes: {
    render: component('@components/markdoc/content/blocks/DoRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: injectFrontmatter
  },
  fields: {
    render: component('@components/markdoc/content/blocks/Fields.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  fuel: {
    render: component('@components/markdoc/content/blocks/Fuel.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  hostiles: {
    render: component('@components/markdoc/content/blocks/Hostiles.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  item_list: {
    render: component('@components/markdoc/content/blocks/ItemList.astro'),
    attributes: {
      ...customContentAttributes,
      defaultOn: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    transform: injectFrontmatter
  },
  main: {
    render: component('@components/markdoc/content/blocks/Main.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  main_residential: {
    render: component('@components/markdoc/content/blocks/MainResidential.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  required_resources: {
    render: component('@components/markdoc/content/blocks/RequiredResources.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  settings: {
    render: component('@components/markdoc/content/blocks/Settings.astro'),
    selfClosing: false,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  smelting_recipes: {
    render: component('@components/markdoc/content/blocks/SmeltingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: injectFrontmatter
  },
  stock: {
    render: component('@components/markdoc/content/blocks/Stock.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  tasks: {
    render: component('@components/markdoc/content/blocks/Tasks.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  work_orders: {
    render: component('@components/markdoc/content/blocks/WorkOrders.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  },
  statistics: {
    render: component('@components/markdoc/content/blocks/Statistics.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: injectFrontmatter
  }
};
