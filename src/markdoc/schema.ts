import { component } from '@astrojs/markdoc/config';

import { injectFrontmatter } from './mixin';
import type { Tag } from './types';

export const schema: Tag = {
  render: component('@components/markdoc/schema/Schema.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    }
  },
  transform: injectFrontmatter
};
