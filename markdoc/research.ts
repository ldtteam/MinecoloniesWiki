import { component } from '@astrojs/markdoc/config';

export const research_trees = {
  render: component('./src/components/markdoc/research/ResearchTrees.astro'),
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

export const research_list = {
  render: component('./src/components/markdoc/research/ResearchList.astro'),
  selfClosing: true
};
