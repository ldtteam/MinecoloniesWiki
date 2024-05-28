import { Markdoc } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const injectFrontmatter: Tag['transform'] = (node, config) => {
  const frontmatter = config.variables?.frontmatter;
  const attributes = {
    frontmatter,
    ...node.transformAttributes(config)
  };

  const children = node.transformChildren(config);
  return new Markdoc.Tag(config.tags![node.tag!].render, attributes, children);
};
