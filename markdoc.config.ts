import { type AstroMarkdocConfig, defineMarkdocConfig, Markdoc, nodes } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

import { building, building_infobox, contentBlocks as buildingContentBlocks } from './src/markdoc/buildings';
import { item, item_combined_infobox, item_infobox } from './src/markdoc/items';
import { research_link, research_list, research_trees } from './src/markdoc/research';
import type { Tag } from './src/markdoc/types';
import { citizen_name_pack_list, content_block, image_row, social_link } from './src/markdoc/util';
import { version } from './src/markdoc/version';
import { worker, worker_infobox, workers_table } from './src/markdoc/workers';

function extendNodeClasses(...extraClasses: string[]): Tag['transform'] {
  const result: Tag['transform'] = (node, config) => {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const classes = attributes['class'] !== undefined ? [attributes['class'].split(' ')] : [];
    classes.push(...extraClasses);
    attributes['class'] = classes.join(' ');
    return new Markdoc.Tag(node.type, attributes, children);
  };
  return result;
}

export const config: AstroMarkdocConfig = {
  tags: {
    building,
    building_infobox,
    worker,
    worker_infobox,
    workers_table,
    item,
    item_infobox,
    item_combined_infobox,
    research_trees,
    research_list,
    research_link,
    version,
    social_link,
    citizen_name_pack_list,
    content_block,
    image_row
  },
  nodes: {
    document: {
      ...nodes.document,
      render: undefined
    },
    table: {
      ...nodes.table,
      transform: extendNodeClasses('table', 'table-hover')
    },
    blockquote: {
      ...nodes.blockquote,
      transform: extendNodeClasses('blockquote-border')
    }
  },
  extends: [
    shiki({
      theme: 'css-variables',
      wrap: true
    })
  ]
};

for (const [name, buildingContentBlockTag] of Object.entries(buildingContentBlocks)) {
  config.tags![`building_gui_content_block_${name.toLocaleLowerCase()}`] = buildingContentBlockTag;
}

export default defineMarkdocConfig(config);
