import { component } from '@astrojs/markdoc/config';

import { injectFrontmatter } from './mixin';
import type { Tag } from './types';

export const worker: Tag = {
  render: component('@components/markdoc/names/WorkerName.astro'),
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
  transform: injectFrontmatter
};

export const workers_table: Tag = {
  render: component('@components/markdoc/util/WorkersTable.astro')
};
