import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const item: Tag = {
  render: component('./src/components/wiki/items/names/MarkdocItem.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    }
  }
};

export const item_page: Tag = {
  render: component('./src/components/wiki/items/names/MarkdocItemPage.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    }
  }
};

export const item_infobox: Tag = {
  render: component('./src/components/wiki/items/infobox/MarkdocItemInfobox.astro'),
  attributes: {
    item: {
      type: String,
      required: false
    }
  }
};
