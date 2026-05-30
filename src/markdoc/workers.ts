import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export interface MarkdocWorkerComponent {
  name?: string;
}

export const worker: Tag = {
  render: component('./src/components/wiki/workers/names/MarkdocWorkerName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    },
    building: {
      type: String,
      required: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    },
    link: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};

export const workers_table: Tag = {
  render: component('./src/components/wiki/workers/MarkdocWorkersTable.astro')
};

export const worker_jobs_table: Tag = {
  render: component('./src/components/wiki/workers/MarkdocWorkerJobsTable.astro'),
  selfClosing: true
};
