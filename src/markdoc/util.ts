import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const content_block: Tag = {
  render: component('@components/markdoc/content/RegularContentBlock.astro'),
  attributes: {
    image: {
      type: String,
      required: true
    },
    image_alt: {
      type: String,
      required: false
    },
    cols: {
      type: Number,
      default: false
    }
  }
};
