import { isUrl } from '@utils/util';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import type { PartialCollectionEntry } from './util';

interface WikiItemPage {
  page?: CollectionEntry<'wiki'>;
  item: CollectionEntry<'items'>;
}

async function extractWikiPageData(
  page: CollectionEntry<'wiki'>,
  item: PartialCollectionEntry<'items'>
): Promise<WikiItemPage | undefined> {
  if (page.data.type === 'item' && page.data.item.id === item.id) {
    const itemData = await getEntry(page.data.item);
    return {
      page,
      item: itemData
    };
  }
  if (page.data.type === 'item-combined') {
    const subItem = page.data.items.find((i) => i.id === item.id);
    if (subItem !== undefined) {
      const itemData = await getEntry(subItem);
      return {
        page,
        item: itemData
      };
    }
  }
  if (page.data.type === 'building' && 'minecolonies/blockhut' + page.data.id === item.id) {
    const itemData = await getEntry('items', `minecolonies/blockhut${page.data.id}`);
    if (itemData !== undefined) {
      return {
        item: itemData
      };
    }
  }
}

async function getWikiPageForItem(item: PartialCollectionEntry<'items'>): Promise<WikiItemPage | undefined> {
  const pages = await getCollection('wiki');
  const itemPages = await Promise.all(pages.map((page) => extractWikiPageData(page, item)));
  const filteredPages = itemPages.filter((f) => f !== undefined);

  if (filteredPages.length > 1) {
    throw new Error(
      `Multiple pages refer to item '${item.id}', make sure only one page shows information for this given item.`
    );
  }

  return filteredPages.length > 0 ? filteredPages[0] : undefined;
}

export async function getItemLink(item: CollectionEntry<'items'>) {
  if (item.id.startsWith('minecraft')) {
    return `https://minecraft.wiki/${item.data.name.replace(' ', '_')}`;
  }

  return await getWikiPageForItem(item).then((p) => (p?.page ? '/wiki/' + p.page.id : undefined));
}

export async function getItemImage(icon: string, width: number, height?: number) {
  let src: string;
  if (isUrl(icon)) {
    src = await getImage({
      src: icon,
      width,
      height
    }).then((d) => d.src);
  } else {
    const [modId, fileNameWithExtension] = icon.split('/', 2);
    const [fileName, ext] = fileNameWithExtension.split('.', 2);
    let imageFile;
    if (ext === 'gif') {
      imageFile = await import(`../assets/images/wiki/items/${modId}/${fileName}.gif`).then((f) => f.default);
    } else {
      imageFile = await import(`../assets/images/wiki/items/${modId}/${fileName}.png`).then((f) => f.default);
    }
    src = await getImage({
      src: imageFile,
      width,
      height
    }).then((d) => d.src);
  }
  return src;
}
