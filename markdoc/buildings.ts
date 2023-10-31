import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const building: Tag = {
  render: component('./src/components/markdoc/BuildingName.astro'),
  selfClosing: true,
  attributes: {
    building: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

export const building_link: Tag = {
  render: component('./src/components/markdoc/BuildingName.astro'),
  selfClosing: true,
  attributes: {
    building: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      required: false,
      default: true
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

export const building_infobox: Tag = {
  render: component('./src/components/markdoc/infobox/BuildingInfobox.astro'),
  attributes: {
    building: {
      type: String,
      required: true
    }
  }
};
