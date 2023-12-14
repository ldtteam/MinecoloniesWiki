import { component } from '@astrojs/markdoc/config';

export const worker = {
  render: component('@components/markdoc/WorkerName.astro'),
  selfClosing: true,
  attributes: {
    name: {
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
  render: component('@components/markdoc/WorkerName.astro'),
  selfClosing: true,
  attributes: {
    name: {
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

export const worker_infobox: Tag = {
  render: component('@components/markdoc/infobox/WorkerInfobox.astro'),
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};