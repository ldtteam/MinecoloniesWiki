import { type ImageMetadata, type ImageOutputFormat } from 'astro';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import minecraftData, { type Item } from 'minecraft-data';

import { isWikiPageOfType, type WikiPageEntry } from './wiki';

interface ParsedItemId {
  namespace: string;
  id: string;
}

interface ItemFetcherResponse {
  name: string;
  icons: Array<string | ImageMetadata>;
  link: string | undefined;
}

type ItemFetcher = (
  version: CollectionEntry<'versions'>,
  item: ParsedItemId,
  requireImages: boolean
) => Promise<ItemFetcherResponse | undefined>;

export interface WikiItemPageDirect {
  type: 'direct';
  page?: WikiPageEntry<'item'>;
  item: CollectionEntry<'items'>;
}

export interface WikiItemPageCombined {
  type: 'combined';
  page: WikiPageEntry<'item-combined'>;
  item: CollectionEntry<'items'>;
}

export interface WikiItemPageCombinedSelf {
  type: 'combined-self';
  page: WikiPageEntry<'item-combined'>;
}

type WikiItemPage = WikiItemPageDirect | WikiItemPageCombined | WikiItemPageCombinedSelf;

export interface ItemVersionData extends ParsedItemId {
  name: string;
  link: string | undefined;
  icons: Array<string | ImageMetadata>;
  versions: CollectionEntry<'versions'>[];
}

export interface ItemData extends ParsedItemId {
  defaultName: string;
  data: ItemVersionData[];
}

export function parseItemId(name: string, defaultNamespace = 'minecraft'): ParsedItemId {
  if (name.includes('/')) {
    const [namespace, id] = name.split('/', 2);
    return {
      namespace,
      id
    };
  }
  return {
    namespace: defaultNamespace,
    id: name
  };
}

async function extractWikiPageData(
  page: CollectionEntry<'wiki'>,
  name: ParsedItemId
): Promise<WikiItemPage | undefined> {
  if (isWikiPageOfType(page, 'item') && page.data.item.id.split('/')[1] === name.id) {
    const itemData = await getEntry('items', page.data.item.id);
    return {
      type: 'direct',
      page,
      item: itemData
    };
  }
  if (isWikiPageOfType(page, 'item-combined') && page.slug === 'items/' + name.id) {
    return {
      type: 'combined-self',
      page
    };
  }
  if (isWikiPageOfType(page, 'item-combined')) {
    const subItem = page.data.items.find((item) => item.id.split('/')[1] === name.id);
    if (subItem !== undefined) {
      const itemData = await getEntry('items', subItem.id);
      return {
        type: 'combined',
        page,
        item: itemData
      };
    }
  }
  if (isWikiPageOfType(page, 'building') && name.id === 'blockhut' + page.data.id) {
    const itemData = await getEntry('items', name.namespace + '/' + name.id);
    if (itemData !== undefined) {
      return {
        type: 'direct',
        item: itemData
      };
    }
  }
}

export async function getWikiPageForItem(name: ParsedItemId): Promise<WikiItemPage | undefined> {
  const pages = await getCollection('wiki');
  const itemPages = await Promise.all(pages.map((page) => extractWikiPageData(page, name)));
  const filteredPages = itemPages.filter((f) => f !== undefined);

  if (filteredPages.length > 1) {
    throw new Error(
      `Multiple pages refer to item '${name.id}', make sure only one page shows information for this given item.`
    );
  }

  return filteredPages.length > 0 ? filteredPages[0] : undefined;
}

const fromWikiFetcher: ItemFetcher = async (_version, item, requireImages) => {
  const itemPage = await getWikiPageForItem(item);

  if (itemPage !== undefined) {
    if (itemPage.type === 'direct') {
      return {
        name: itemPage.item.data.name,
        icons: requireImages ? itemPage.item.data.icons : [],
        link: itemPage.page ? '/wiki/' + itemPage.page.slug : undefined
      };
    } else if (itemPage.type === 'combined') {
      return {
        name: itemPage.item.data.name,
        icons: requireImages ? itemPage.item.data.icons : [],
        link: '/wiki/' + itemPage.page.slug
      };
    }
  }
};

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

const fetchersByNamespace: Record<string, ItemFetcher> = {
  minecraft: async (version, item, requireImages) => {
    const data = minecraftData(version.id);
    const itemData = data.itemsByName[item.id] ?? unavailableMcItems[item.id];
    if (!itemData) {
      return undefined;
    }

    const parsedItemName = itemData.displayName.replaceAll(' ', '_');

    if (requireImages) {
      const extension = imageExtensionOverrides[item.id] ?? 'png';
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
  },
  minecolonies: fromWikiFetcher,
  structurize: fromWikiFetcher,
  domum_ornamentum: fromWikiFetcher,
  multipiston: fromWikiFetcher
};

export async function getItemData(item: string, requireImages = false): Promise<ItemData> {
  const versions = await getCollection('versions');

  const itemId = parseItemId(item);

  const results: ItemData = {
    ...itemId,
    defaultName: '',
    data: []
  };

  let highestVersionName = '';
  let highestVersionOrder = 0;
  for (const version of versions) {
    const fetcher = fetchersByNamespace[itemId.namespace];

    if (fetcher === undefined) {
      throw new Error(`Data fetcher for namespace '${itemId.namespace}' does not exist.`);
    }

    try {
      const existingResult = results.data.find((f) => f.namespace === itemId.namespace && f.id === itemId.id);

      let versionName: string;
      if (existingResult) {
        existingResult.versions.push(version);
        versionName = existingResult.name;
      } else {
        const data = await fetcher(version, itemId, requireImages);
        if (data === undefined) {
          continue;
        }

        results.data.push({
          ...data,
          ...itemId,
          versions: [version]
        });

        versionName = data.name;
      }

      if (version.data.order > highestVersionOrder) {
        highestVersionOrder = version.data.order;
        highestVersionName = versionName;
      }
    } catch (ex) {
      console.warn(ex);
      continue;
    }
  }

  results.defaultName = highestVersionName;
  return results;
}
