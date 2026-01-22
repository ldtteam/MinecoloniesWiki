import { component } from '@astrojs/markdoc/config';

import { injectFrontmatter } from './mixin';
import type { Tag } from './types';

export const item: Tag = {
  render: component('./src/components/markdoc/names/items/MarkdocItem.astro'),
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
  render: component('./src/components/markdoc/names/items/MarkdocItemPage.astro'),
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
  render: component('./src/components/markdoc/infobox/MarkdocItemInfobox.astro'),
  attributes: {
    item: {
      type: String,
      required: false
    }
  },
  transform: injectFrontmatter
};
