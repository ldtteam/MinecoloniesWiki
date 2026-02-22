import { z } from 'astro/zod';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getJsonFile } from './files';
import { getOverrideValues } from './override';
import { getNewestVersion, getVersionedEntry, type VersionedResult } from './version';

const blockStateSchema = z.object({
  properties: z.array(
    z.object({
      property: z.string(),
      type: z.string(),
      values: z.array(z.string())
    })
  ),
  blockstates: z.array(
    z.object({
      values: z.array(
        z.object({
          property: z.string(),
          value: z.string()
        })
      ),
      imageid: z.string()
    })
  )
});

export type Title = string | VersionedResult<string>;

interface WikiPageEntry {
  type: 'page';
  id: string;
  name: Title;
}

interface WikiSubCategoryEntry {
  type: 'subcategory';
  name: Title;
  pages: WikiPageEntry[];
}

type WikiPage = WikiSubCategoryEntry | WikiPageEntry;

type WikiPages = Map<CollectionEntry<'wiki_categories'>, WikiPage[]>;

export async function getWikiTitle(entry: CollectionEntry<'wiki'>): Promise<Title> {
  const latestVersion = await getNewestVersion();

  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const item = await getVersionedEntry('items', latestVersion, entry.data.item);
    return item?.data.name ?? entry.id;
  } else if (entry.data.type === 'building') {
    const building = await getEntry('buildings', entry.data.id);
    if (building === undefined) {
      return entry.id;
    }
    return await getOverrideValues(building.data, (v) => v.name, '');
  }

  return entry.id;
}

async function getItemImageUrl(item: CollectionEntry<'items'>): Promise<string | undefined> {
  const version = await getEntry(item.data.version);
  const [namespace, itemPath] = item.data.baseId.split('/');

  if (item.data.blockId !== undefined) {
    const blockStatePath = `./generator/versions/${version.data.submodule}/output/block_states/${namespace}/${itemPath}.json`;
    try {
      const blockState = await getJsonFile(blockStateSchema, blockStatePath);
      const imageId = blockState.blockstates[0]?.imageid;
      if (imageId) {
        return `/images/wiki/blocks/${version.data.submodule}/${namespace}/${itemPath}/${imageId}.png`;
      }
    } catch {
      return undefined;
    }
  } else {
    return `/images/wiki/items/${version.data.submodule}/${namespace}/${itemPath}.png`;
  }
}

export async function getWikiImage(entry: CollectionEntry<'wiki'>): Promise<string | undefined> {
  const latestVersion = await getNewestVersion();

  if (entry.data.type === 'page') {
    return entry.data.image?.src;
  } else if (entry.data.type === 'item') {
    const item = await getVersionedEntry('items', latestVersion, entry.data.item);
    if (item === undefined) {
      return undefined;
    }
    return await getItemImageUrl(item);
  } else if (entry.data.type === 'item-combined') {
    if (entry.data.items.length === 0) {
      return undefined;
    }

    const item = await getVersionedEntry('items', latestVersion, entry.data.items[0]);
    if (item === undefined) {
      return undefined;
    }
    return await getItemImageUrl(item);
  } else if (entry.data.type === 'building') {
    let blockItemId: string;
    switch (entry.data.id) {
      case 'residence':
        blockItemId = 'minecolonies/blockhutcitizen';
        break;
      case 'quarry':
        blockItemId = 'minecolonies/mediumquarry';
        break;
      default:
        blockItemId = `minecolonies/blockhut${entry.data.id}`;
        break;
    }

    const blockItem = await getVersionedEntry('items', latestVersion, blockItemId);
    if (!blockItem) {
      return undefined;
    }

    return await getItemImageUrl(blockItem);
  }
}

export async function getSectionRoot(page: CollectionEntry<'wiki'>) {
  return (await getCollection('wiki', (p) => p.data.sections?.some((s) => s.id === page.id))).shift();
}

export async function isSection(page: CollectionEntry<'wiki'>) {
  return (await getSectionRoot(page)) !== undefined;
}

export async function getWikiPages(): Promise<WikiPages> {
  const wikiPages = await getCollection('wiki', async (page) => page.id.indexOf('/') > 0 && isSection(page));
  const wikiCategories = (await getCollection('wiki_categories')).sort((a, b) => a.data.order - b.data.order);

  const distributedPages = wikiCategories.reduce<WikiPages>((prev, curr) => prev.set(curr, []), new Map());

  for (const entry of wikiPages) {
    if (await isSection(entry)) {
      continue;
    }

    const categoryString = entry.id.substring(0, entry.id.indexOf('/'));
    const category = wikiCategories.find((f) => f.id === categoryString);
    if (category === undefined) {
      throw new Error(
        `Wiki page "${categoryString}" is not in any of the allowed category folders: ${wikiCategories
          .map((m) => m.data.name)
          .join(', ')}.`
      );
    }

    const pages = distributedPages.get(category);
    if (pages !== undefined) {
      const title = await getWikiTitle(entry);
      pages.push({
        type: 'page',
        id: entry.id,
        name: title
      });
    }
  }

  for (const worker of await getCollection('workers')) {
    const category = wikiCategories.find((f) => f.id === 'workers');
    const building = await getEntry(worker.data.primaryBuilding);
    if (category !== undefined) {
      const pages = distributedPages.get(category);
      if (pages !== undefined) {
        pages.push({
          type: 'page',
          name: worker.data.name,
          id: 'buildings/' + building.id
        });
      }
    }
  }

  for (const pages of distributedPages.values()) {
    pages.sort((a, b) =>
      (typeof a.name === 'string' ? a.name : a.name.highestValue).localeCompare(
        typeof b.name === 'string' ? b.name : b.name.highestValue
      )
    );
  }

  return distributedPages;
}
