import { type ImageMetadata, type ImageOutputFormat } from 'astro';
import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import minecraftData, { type Item } from 'minecraft-data';

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

interface ItemVersionData extends ParsedItemId {
  name: string;
  link: string | undefined;
  icons: Array<string | ImageMetadata>;
  versions: CollectionEntry<'versions'>[];
}

export interface ItemData extends ParsedItemId {
  defaultName: string;
  data: ItemVersionData[];
}

const fromWikiFetcher: ItemFetcher = async (_version, item, requireImages) => {
  const itemPath = item.namespace + '/' + item.id;
  const itemData = await getEntry('items', itemPath);
  if (itemData === undefined) {
    return undefined;
  }

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
      return {
        name: itemData.data.name,
        icons: requireImages ? itemData.data.icons : [],
        link: '/wiki/items/' + item.id
      };
    } else if (page.data.type === 'item-combined') {
      const item = page.data.items.find((f) => f.id === itemPath)!;
      return {
        name: itemData.data.name,
        icons: requireImages ? itemData.data.icons : [],
        link: '/wiki/items/' + item.id
      };
    }
  } else {
    return {
      name: itemData.data.name,
      icons: requireImages ? itemData.data.icons : [],
      link: undefined
    };
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

      if (extension == 'gif') {
        // Gifs are not optimizable by Squoosh, so we have to forward them as raw images
        return {
          name: itemData.displayName,
          icons: [url],
          link: `https://minecraft.wiki/w/${parsedItemName}`
        };
      }

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
        const data = await fetcher(version, { namespace, id }, requireImages);
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
