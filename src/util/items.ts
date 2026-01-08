import { type CollectionEntry, getCollection, getEntry, z } from 'astro:content';
import { getJsonFile, parseYaml } from 'src/loaders/file-utils';

import { parseResourceLocation, type ResourceLocation, resourceLocationToWikiReference } from './resourcelocation';

interface WikiItemPage {
  page?: CollectionEntry<'wiki'>;
  item: CollectionEntry<'items'>;
}

async function extractWikiPageData(
  page: CollectionEntry<'wiki'>,
  item: CollectionEntry<'items'>
): Promise<WikiItemPage | undefined> {
  const itemData = await getEntry(item);
  if (page.data.type === 'item' && page.data.item === itemData.data.baseId) {
    return {
      page,
      item: itemData
    };
  } else if (page.data.type === 'item-combined') {
    const subItem = page.data.items.find((pageItem) => pageItem === itemData.data.baseId);
    if (subItem !== undefined) {
      return {
        page,
        item: itemData
      };
    }
  } else if (page.data.type === 'building' && 'minecolonies/blockhut' + page.data.id === item.id) {
    const itemData = await getEntry('items', `minecolonies/blockhut${page.data.id}`);
    if (itemData !== undefined) {
      return {
        item: itemData
      };
    }
  }
}

async function getWikiPageForItem(item: CollectionEntry<'items'>): Promise<WikiItemPage | undefined> {
  const pages = await getCollection('wiki');
  const filteredPages = await Promise.all(pages.map((page) => extractWikiPageData(page, item))).then((res) =>
    res.filter((f) => f !== undefined)
  );

  if (filteredPages.length > 1) {
    throw new Error(
      `Multiple pages refer to item '${item.id}', make sure only one page shows information for this given item.`
    );
  }

  return filteredPages.length > 0 ? filteredPages[0] : undefined;
}

export async function getItemLink(item: CollectionEntry<'items'>) {
  if (item.data.baseId.startsWith('minecraft')) {
    return `https://minecraft.wiki/${item.data.name.replace(' ', '_')}`;
  }

  return await getWikiPageForItem(item).then((p) => (p?.page ? '/wiki/' + p.page.id : undefined));
}

export async function getItemsFromTag(tag: ResourceLocation, version: CollectionEntry<'versions'>['data']) {
  const tagData = await getJsonFile(
    z.array(z.string()),
    `./src/data/wiki/tags/${tag.namespace}/${tag.path}.yaml`,
    parseYaml
  );
  return tagData.map((item) => resourceLocationToWikiReference(parseResourceLocation(item), version, 'items'));
}
