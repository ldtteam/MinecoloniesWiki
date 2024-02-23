import { component, Markdoc } from '@astrojs/markdoc/config';
import type { Config, Node } from '@markdoc/markdoc';
import type { CollectionEntry } from 'astro:content';

import type { Tag } from './types';

function getItemAttributes(attributes: ReturnType<Node['transformAttributes']>, config: Config) {
  if (Object.keys(attributes).includes('item')) {
    return attributes;
  }

  const frontmatter = config.variables?.frontmatter as CollectionEntry<'wiki'>['data'] | undefined;
  if (frontmatter?.type === 'item') {
    return {
      ...attributes,
      item: frontmatter.item.id
    };
  }
  return attributes;
}

const itemTransform: Tag['transform'] = (node, config) => {
  const attributes = getItemAttributes(node.transformAttributes(config), config);
  const children = node.transformChildren(config);
  return new Markdoc.Tag(config.tags![node.tag!].render, attributes, children);
};

function getItemCombinedAttributes(attributes: ReturnType<Node['transformAttributes']>, config: Config) {
  if (Object.keys(attributes).includes('items')) {
    return attributes;
  }

  const frontmatter = config.variables?.frontmatter as CollectionEntry<'wiki'>['data'] | undefined;
  if (frontmatter?.type === 'item-combined') {
    return {
      ...attributes,
      items: frontmatter.items.map((item) => item.id)
    };
  }
  return attributes;
}

const itemCombinedTransform: Tag['transform'] = (node, config) => {
  const attributes = getItemCombinedAttributes(node.transformAttributes(config), config);
  const children = node.transformChildren(config);
  return new Markdoc.Tag(config.tags![node.tag!].render, attributes, children);
};

export const item_infobox: Tag = {
  render: component('@components/markdoc/infobox/ItemInfobox.astro'),
  attributes: {
    item: {
      type: String,
      required: false
    }
  },
  transform: itemTransform
};

export const item_combined_infobox: Tag = {
  render: component('@components/markdoc/infobox/ItemCombinedInfobox.astro'),
  attributes: {
    items: {
      type: String,
      required: false
    },
    cols: {
      type: Number,
      required: false,
      default: 2
    }
  },
  transform: itemCombinedTransform
};
