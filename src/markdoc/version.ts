import { component } from '@astrojs/markdoc/config';

export const version = {
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
