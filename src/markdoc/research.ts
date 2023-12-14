import { component } from '@astrojs/markdoc/config';

export const research_trees = {
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

export const research_list = {
  render: component('@components/markdoc/research/ResearchList.astro'),
  selfClosing: true
};

export const research_link = {
  render: component('@components/markdoc/research/ResearchLink.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true,
    }
  }
};
