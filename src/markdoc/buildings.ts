import { component, Markdoc } from '@astrojs/markdoc/config';
import type { MarkdocBuildingComponent } from '@utils/building';

import type { Tag } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBuildingAttributes(attributes: Record<string, any>, config: Parameters<NonNullable<Tag["transform"]>>[1]): MarkdocBuildingComponent {
  const buildingId = config.variables?.frontmatter?.building?.id;
  if (Object.keys(attributes).includes("name")) {
    return {
      ...attributes,
      buildingId,
      name: attributes.name
    };
  } else {
    return {
      ...attributes,
      buildingId,
      name: buildingId ?? ""
    }
  }
}

function buildingTransform(tagName: string): Tag["transform"] {
  const result: Tag["transform"] = (node, config) => {
    const attributes = getBuildingAttributes(node.transformAttributes(config), config);
    const children = node.transformChildren(config);
    return new Markdoc.Tag(config.tags![tagName].render, attributes, children);
  }
  return result;
}

export const building: Tag = {
  render: component('@components/markdoc/BuildingName.astro'),
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
  transform: buildingTransform("building")
};

export const building_infobox: Tag = {
  render: component('@components/markdoc/infobox/BuildingInfobox.astro'),
  transform: buildingTransform("building_infobox")
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
  },
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
    transform: buildingTransform("building_gui_content_block_brewing_recipes")
  },
  crafting_recipes: {
    render: component('@components/markdoc/content/blocks/CraftingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_crafting_recipes")
  },
  custom: {
    render: component('@components/markdoc/content/blocks/Custom.astro'),
    attributes: customContentAttributes,
    transform: buildingTransform("building_gui_content_block_custom")
  },
  do_recipes: {
    render: component('@components/markdoc/content/blocks/DoRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_do_recipes")
  },
  fields: {
    render: component('@components/markdoc/content/blocks/Fields.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_fields")
  },
  fuel: {
    render: component('@components/markdoc/content/blocks/Fuel.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_fuel")
  },
  hostiles: {
    render: component('@components/markdoc/content/blocks/Hostiles.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_hostiles")
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
    transform: buildingTransform("building_gui_content_block_item_list")
  },
  main: {
    render: component('@components/markdoc/content/blocks/Main.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_main")
  },
  main_residential: {
    render: component('@components/markdoc/content/blocks/MainResidential.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_main_residential")
  },
  required_resources: {
    render: component('@components/markdoc/content/blocks/RequiredResources.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_required_resources")
  },
  settings: {
    render: component('@components/markdoc/content/blocks/Settings.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_settings")
  },
  smelting_recipes: {
    render: component('@components/markdoc/content/blocks/SmeltingRecipes.astro'),
    selfClosing: true,
    attributes: craftingContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_smelting_recipes")
  },
  stock: {
    render: component('@components/markdoc/content/blocks/Stock.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_stock")
  },
  tasks: {
    render: component('@components/markdoc/content/blocks/Tasks.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_tasks")
  },
  work_orders: {
    render: component('@components/markdoc/content/blocks/WorkOrders.astro'),
    selfClosing: true,
    attributes: defaultContentBlockAttributes,
    transform: buildingTransform("building_gui_content_block_work_orders")
  }
};
