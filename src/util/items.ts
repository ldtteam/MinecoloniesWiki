import { type ImageMetadata, type ImageOutputFormat } from 'astro';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import minecraftData, { type Item } from 'minecraft-data';

import type { PartialCollectionEntry } from './util';
import { getSortedVersions } from './version';

export interface WikiItemPage {
  page?: CollectionEntry<'wiki'>;
  item: CollectionEntry<'items'>;
}

export interface ItemVersionData {
  name: string;
  icons: Array<string | ImageMetadata>;
  versions: CollectionEntry<'versions'>[];
}

export interface ResultItemData {
  defaultName: string;
  link: string | undefined;
  data: ItemVersionData[];
}

export type ItemReference = string | CollectionEntry<'items'>;

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

const unavailableMcItems: Record<string, Item> = {
  water_bottle: {
    id: -1,
    name: 'water_bottle',
    displayName: 'Water Bottle',
    stackSize: 1
  }
};

const imageExtensionOverrides: Record<string, ImageOutputFormat> = {
  crimson_stem: 'gif',
  warped_stem: 'gif',
  compass: 'gif'
};

const fetchMinecraftData = async (version: CollectionEntry<'versions'>, item: string, requireImages: boolean) => {
  const data = minecraftData(version.id);
  const itemData = data?.itemsByName[item] ?? unavailableMcItems[item];
  if (!itemData) {
    return undefined;
  }

  const parsedItemName = itemData.displayName.replaceAll(' ', '_');

  if (requireImages) {
    const extension = imageExtensionOverrides[item] ?? 'png';
    const url = `https://minecraft.wiki/images/Invicon_${parsedItemName}.${extension}`;

    const image = await getImage({
      src: url,
      width: 32,
      height: 32
    });

    return {
      name: itemData.displayName,
      icons: [image.options.src as ImageMetadata],
      link: `https://minecraft.wiki/w/${parsedItemName}`
    };
  } else {
    return {
      name: itemData.displayName,
      icons: [],
      link: `https://minecraft.wiki/w/${parsedItemName}`
    };
  }
};

export async function getItemReference(item: string): Promise<CollectionEntry<'tags'> | ItemReference> {
  const tagData = await getEntry('tags', item);
  if (tagData) {
    return tagData;
  }
  const itemData = await getEntry('items', item);
  if (itemData) {
    return itemData;
  }
  return item;
}

export async function getItemData(item: ItemReference, requireImages = false): Promise<ResultItemData> {
  const result: ResultItemData = {
    defaultName: '',
    link: '',
    data: []
  };

  for (const version of await getSortedVersions()) {
    let data: Omit<ItemVersionData, 'versions'> | undefined = undefined;
    if (typeof item === 'string') {
      const mcData = await fetchMinecraftData(version, item, requireImages);
      if (mcData === undefined) {
        continue;
      }
      result.link = mcData.link;
      data = mcData;
    } else {
      const itemPage = await getWikiPageForItem(item);
      if (itemPage !== undefined) {
        data = {
          name: itemPage.item.data.name,
          icons: requireImages ? itemPage.item.data.icons : []
        };
        result.link = itemPage.page ? '/wiki/' + itemPage.page.id : undefined;
      }
    }

    if (data === undefined) {
      continue;
    }

    try {
      const existingResult = result.data.find((f) => f.name === data.name);

      if (existingResult) {
        existingResult.versions.push(version);
        result.defaultName = existingResult.name;
      } else {
        result.data.push({
          ...data,
          versions: [version]
        });
        result.defaultName = data.name;
      }
    } catch (ex) {
      console.warn(ex);
      continue;
    }
  }

  return result;
}
