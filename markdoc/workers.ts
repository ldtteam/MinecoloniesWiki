import { component } from '@astrojs/markdoc/config';

export const worker = {
  render: component('./src/components/markdoc/WorkerName.astro'),
  selfClosing: true,
  attributes: {
    worker: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      default: false,
      required: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

export const worker_link = {
  render: component('./src/components/markdoc/WorkerName.astro'),
  selfClosing: true,
  attributes: {
    worker: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      default: true,
      required: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
