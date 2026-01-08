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
  render: component('@components/markdoc/infobox/MarkdocItemInfobox.astro'),
  attributes: {
    item: {
      type: String,
      required: false
    }
  },
  transform: injectFrontmatter
};
