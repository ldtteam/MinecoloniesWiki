import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const version: Tag = {
  render: component('@components/markdoc/version/VersionBlock.astro'),
  attributes: {
    range: {
      type: String,
      required: true
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
