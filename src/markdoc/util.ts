import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const social_link: Tag = {
  render: component('./src/components/wiki/util/MarkdocSocialLink.astro'),
  selfClosing: true,
  attributes: {
    id: {
      type: String,
      required: true
    }
  }
};

export const official_citizen_name_pack_list: Tag = {
  render: component('./src/components/wiki/citizen_name_packs/MarkdocOfficialCitizenNamePackList.astro'),
  selfClosing: true
};

export const citizen_name_pack_list: Tag = {
  render: component('./src/components/wiki/citizen_name_packs/MarkdocCitizenNamePackList.astro'),
  selfClosing: true
};

export const configuration_list: Tag = {
  render: component('./src/components/wiki/configuration/MarkdocConfiguration.astro'),
  selfClosing: true
};

export const content_block: Tag = {
  render: component('./src/components/wiki/content/MarkdocRegularContentBlock.astro'),
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
      default: 4
    }
  }
};

export const image_row: Tag = {
  render: component('./src/components/wiki/images/MarkdocImageRow.astro')
};

export const meta: Tag = {
  render: component('./src/components/wiki/util/MarkdocMetaTag.astro'),
  attributes: {
    key: {
      type: String,
      required: true
    }
  }
};
