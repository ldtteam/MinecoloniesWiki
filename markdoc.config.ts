import { type AstroMarkdocConfig, component, defineMarkdocConfig, Markdoc, nodes } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

import {
  building,
  building_infobox,
  building_link,
  contentBlocks as buildingContentBlocks
} from './src/markdoc/buildings';
import { research_link, research_list, research_trees } from './src/markdoc/research';
import { content_block } from './src/markdoc/util';
import { version } from './src/markdoc/version';
import { worker, worker_infobox, worker_link } from './src/markdoc/workers';

export const config: AstroMarkdocConfig = {
  tags: {
    pages_overview: {
      render: component('@components/markdoc/PagesOverview.astro'),
      selfClosing: true
    },
    building,
    building_link,
    building_infobox,
    worker,
    worker_link,
    worker_infobox,
    research_trees,
    research_list,
    research_link,
    version,
    content_block
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
        const classes = attributes['class'] !== undefined ? [attributes['class'].split(' ')] : [];
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

for (const [name, buildingContentBlockTag] of Object.entries(buildingContentBlocks)) {
  config.tags![`building_gui_content_block_${name.toLocaleLowerCase()}`] = buildingContentBlockTag;
}

export default defineMarkdocConfig(config);
