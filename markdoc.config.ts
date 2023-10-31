import {
  defineMarkdocConfig,
  component,
  nodes,
  Markdoc,
  type AstroMarkdocConfig
} from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

import { building, building_infobox, building_link } from './markdoc/buildings';
import { research_list, research_trees } from './markdoc/research';
import { version } from './markdoc/version';
import { worker, worker_link } from './markdoc/workers';

export const config: AstroMarkdocConfig = {
  tags: {
    pages_overview: {
      render: component('./src/components/markdoc/PagesOverview.astro'),
      selfClosing: true
    },
    building,
    building_link,
    building_infobox,
    worker,
    worker_link,
    research_trees,
    research_list,
    version
  },
  nodes: {
    document: {
      ...nodes.document,
      render: undefined
    },
    table: {
      ...nodes.table,
      transform: (node, config) => {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        const classes =
          attributes['class'] !== undefined
            ? [attributes['class'].split(' ')]
            : [];
        classes.push('table');
        classes.push('table-hover');
        attributes['class'] = classes.join(' ');
        return new Markdoc.Tag('table', attributes, children);
      }
    }
  },
  extends: [
    shiki({
      theme: 'css-variables',
      wrap: true,
      langs: []
    })
  ]
};

export default defineMarkdocConfig(config);
