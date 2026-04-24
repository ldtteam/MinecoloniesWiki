import { z } from 'astro/zod';
import { type CollectionEntry, getCollection } from 'astro:content';

import { getJsonFile } from '../util//files';
import { parseResourceLocation, type ResourceLocation, resourceLocationToWikiReference } from './resourcelocation';

async function getWikiPageForItem(item: CollectionEntry<'items'>): Promise<CollectionEntry<'wiki'> | undefined> {
  const pages = await getCollection('wiki');

  return pages.find((page) => {
    if (page.data.type === 'item') {
      return page.data.item === item.data.baseId;
    } else if (page.data.type === 'item-combined') {
      return page.data.items.includes(item.data.baseId);
    } else if (page.data.type === 'building') {
      return 'minecolonies/blockhut' + page.data.id === item.data.baseId;
    }
    return false;
  });
}

export async function getItemLink(item: CollectionEntry<'items'>) {
  if (item.data.baseId.startsWith('minecraft')) {
    return `https://minecraft.wiki/${item.data.name.replace(' ', '_')}`;
  }

  const page = await getWikiPageForItem(item);
  return page?.data.type !== 'building' && page !== undefined ? '/wiki/' + page.id : undefined;
}

export async function getItemLinkByBaseId(baseId: string): Promise<string | undefined> {
  const pages = await getCollection('wiki');
  const page = pages.find((page) => {
    if (page.data.type === 'item') {
      return page.data.item === baseId;
    } else if (page.data.type === 'item-combined') {
      return page.data.items.includes(baseId);
    } else if (page.data.type === 'building') {
      return 'minecolonies/blockhut' + page.data.id === baseId;
    }
    return false;
  });
  return page?.data.type !== 'building' && page !== undefined ? '/wiki/' + page.id : undefined;
}

export async function getItemsFromTag(tag: ResourceLocation, version: CollectionEntry<'versions'>['data']) {
  const tagData = await getJsonFile(
    z.array(z.string()),
    `./generator/versions/${version.submodule}/output/item_tags/${tag.namespace}/${tag.path}.json`
  );
  return tagData.map((item) => resourceLocationToWikiReference(parseResourceLocation(item), version, 'items'));
}
