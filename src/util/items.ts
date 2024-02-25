import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import minecraftData, { type Item } from 'minecraft-data';

interface ParsedItemId {
  namespace: string;
  id: string;
}

interface ItemFetcherResponse {
  name: string;
  icons: ImageMetadata[];
  link: string;
}

type ItemFetcher = (
  version: CollectionEntry<'versions'>,
  item: ParsedItemId
) => Promise<ItemFetcherResponse | undefined>;

interface ItemVersionData extends ParsedItemId {
  name: string;
  link: string | undefined;
  icons: ImageMetadata[];
  versions: CollectionEntry<'versions'>[];
}

export interface ItemData extends ParsedItemId {
  defaultName: string;
  data: ItemVersionData[];
}

const fromWikiFetcher: ItemFetcher = async (_version, item) => {
  const itemPath = item.namespace + '/' + item.id;
  const itemPage = await getCollection('wiki', (page) => {
    if (page.data.type === 'item' && page.data.item.id === itemPath) {
      return true;
    }
    if (page.data.type === 'item-combined' && page.data.items.findIndex((item) => item.id === itemPath) >= 0) {
      return true;
    }
    return false;
  });

  if (itemPage.length > 0) {
    const page = itemPage[0];
    if (page.data.type === 'item') {
      const itemData = await getEntry('items', page.data.item.id);
      return {
        name: itemData.data.name,
        icons: itemData.data.icons,
        link: '/wiki/items/' + item
      };
    } else if (page.data.type === 'item-combined') {
      const item = page.data.items.find((f) => f.id === itemPath)!;
      const itemData = await getEntry('items', item.id);
      return {
        name: itemData.data.name,
        icons: itemData.data.icons,
        link: '/wiki/items/' + item
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

const fetchersByNamespace: Record<string, ItemFetcher> = {
  minecraft: async (version, item) => {
    const data = minecraftData(version.id);
    const itemData = data.itemsByName[item.id] ?? unavailableMcItems[item.id];
    if (!itemData) {
      return undefined;
    }

    const parsedItemName = itemData.displayName.replaceAll(' ', '_');

    let isStaticImage: boolean;
    try {
      isStaticImage =
        (
          await fetch(`https://minecraft.wiki/images/Invicon_${parsedItemName}.png`, {
            method: 'HEAD'
          })
        ).status === 200;
    } catch {
      isStaticImage = true;
    }

    const image = await getImage({
      src: `https://minecraft.wiki/images/Invicon_${parsedItemName}.${isStaticImage ? 'png' : 'gif'}`,
      width: 32,
      height: 32,
      format: 'png'
    });
    return {
      name: itemData.displayName,
      icons: [image.options],
      link: `https://minecraft.wiki/w/${parsedItemName}`
    };
  },
  minecolonies: fromWikiFetcher,
  structurize: fromWikiFetcher,
  domum_ornamentum: fromWikiFetcher,
  multipiston: fromWikiFetcher
};

export async function getItemData(item: string): Promise<ItemData> {
  const versions = await getCollection('versions');

  const [namespace, id] = item.split('/');

  const results: ItemData = {
    namespace,
    id,
    defaultName: '',
    data: []
  };

  let highestVersionName = '';
  let highestVersionOrder = 0;
  for (const version of versions) {
    const fetcher = fetchersByNamespace[namespace];

    if (fetcher === undefined) {
      throw new Error(`Data fetcher for namespace '${namespace}' does not exist.`);
    }

    try {
      const existingResult = results.data.find((f) => f.namespace === namespace && f.id === id);

      let versionName: string;
      if (existingResult) {
        existingResult.versions.push(version);
        versionName = existingResult.name;
      } else {
        const data = await fetcher(version, { namespace, id });
        if (data === undefined) {
          continue;
        }

        results.data.push({
          ...data,
          namespace,
          id,
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
