import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const version: Tag = {
  render: component('@components/markdoc/version/VersionBlock.astro'),
  attributes: {
    name: {
      type: String,
      required: true
    },
    before: {
      type: Boolean,
      default: false,
      required: false
    },
    after: {
      type: Boolean,
      default: false,
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
