import { Markdoc } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const injectFrontmatter: Tag['transform'] = (node, config) => {
  const currentPage = config.variables?.id as string;
  const frontmatter = config.variables?.frontmatter;
  const attributes = {
    currentPage,
    frontmatter,
    ...node.transformAttributes(config)
  };

  const children = node.transformChildren(config);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return new Markdoc.Tag(config.tags![node.tag!].render, attributes, children);
};
