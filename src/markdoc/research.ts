import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const research_trees: Tag = {
  render: component('@components/markdoc/research/ResearchTrees.astro'),
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
  render: component('@components/markdoc/research/ResearchList.astro'),
  selfClosing: true
};

export const research_link: Tag = {
  render: component('@components/markdoc/research/ResearchLink.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};
