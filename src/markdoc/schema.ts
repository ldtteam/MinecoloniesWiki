import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const schema: Tag = {
  render: component('./src/components/wiki/schema/MarkdocSchema.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};
