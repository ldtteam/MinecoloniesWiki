import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const research_trees: Tag = {
  render: component('./src/components/wiki/research/MarkdocResearchTrees.astro'),
  selfClosing: true,
  attributes: {
    format: {
      type: String,
      required: false,
      default: 'join',
      matches: ['join', 'list']
    }
  }
};

export const research_list: Tag = {
  render: component('./src/components/wiki/research/MarkdocResearchList.astro'),
  selfClosing: true
};

export const research_link: Tag = {
  render: component('./src/components/wiki/research/names/MarkdocResearchName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};
