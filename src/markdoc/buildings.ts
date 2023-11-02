import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const building: Tag = {
  render: component('@components/markdoc/BuildingName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

export const building_link: Tag = {
  render: component('@components/markdoc/BuildingName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      required: false,
      default: true
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

export const building_infobox: Tag = {
  render: component('@components/markdoc/infobox/BuildingInfobox.astro'),
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};

const defaultContentBlockAttributes: Tag['attributes'] = {
  name: {
    type: String,
    required: true
  },
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
    attributes: craftingContentBlockAttributes
  },
  crafting_recipes: {
    render: component('@components/markdoc/content/blocks/CraftingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  custom: {
    render: component('@components/markdoc/content/blocks/Custom.astro'),
    attributes: customContentAttributes
  },
  do_recipes: {
    render: component('@components/markdoc/content/blocks/DoRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  fields: {
    render: component('@components/markdoc/content/blocks/Fields.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  fuel: {
    render: component('@components/markdoc/content/blocks/Fuel.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  hostiles: {
    render: component('@components/markdoc/content/blocks/Hostiles.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
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
    }
  },
  main: {
    render: component('@components/markdoc/content/blocks/Main.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  main_residential: {
    render: component('@components/markdoc/content/blocks/MainResidential.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  required_resources: {
    render: component('@components/markdoc/content/blocks/RequiredResources.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  settings: {
    render: component('@components/markdoc/content/blocks/Settings.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  smelting_recipes: {
    render: component('@components/markdoc/content/blocks/SmeltingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes
  },
  stock: {
    render: component('@components/markdoc/content/blocks/Stock.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  tasks: {
    render: component('@components/markdoc/content/blocks/Tasks.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  },
  work_orders: {
    render: component('@components/markdoc/content/blocks/WorkOrders.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes
  }
};
