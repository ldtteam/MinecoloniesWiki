import { component } from '@astrojs/markdoc/config';

import { injectFrontmatter } from './mixin';
import type { Tag } from './types';

export const item: Tag = {
  render: component('@components/markdoc/names/items/Item.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    }
  },
  transform: injectFrontmatter
};

export const item_page: Tag = {
  render: component('@components/markdoc/names/items/ItemPage.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    }
  },
  transform: injectFrontmatter
};

export const item_infobox: Tag = {
  render: component('@components/markdoc/infobox/ItemInfobox.astro'),
  attributes: {
    item: {
      type: String,
      required: false
    }
  },
  transform: injectFrontmatter
};

export const item_combined_infobox: Tag = {
  render: component('@components/markdoc/infobox/ItemCombinedInfobox.astro'),
  attributes: {
    items: {
      type: String,
      required: false
    },
    cols: {
      type: Number,
      required: false
    }
  },
  transform: injectFrontmatter
};
