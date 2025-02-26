import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getOverrideValues } from './override';
import type { VersionedResult } from './version';

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
  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const item = await getEntry(entry.data.item);
    return await getOverrideValues(item.data, (i) => i.name, '');
  } else if (entry.data.type === 'building') {
    const building = await getEntry('buildings', entry.data.id);
    if (building === undefined) {
      return entry.id;
    }
    return await getOverrideValues(building.data, (v) => v.name, '');
  }

  return entry.id;
}

export async function getWikiDescription(entry: CollectionEntry<'wiki'>): Promise<string | undefined> {
  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.excerpt;
  } else if (entry.data.type === 'item') {
    const itemData = await getEntry(entry.data.item);
    return itemData.data.description;
  } else if (entry.data.type === 'building') {
    return entry.data.description;
  }

  return undefined;
}

export async function getWikiImage(entry: CollectionEntry<'wiki'>): Promise<string | undefined> {
  if (entry.data.type === 'page') {
    return entry.data.image?.src;
  } else if (entry.data.type === 'item') {
    const item = await getEntry(entry.data.item);
    return item.data.icons.map((m) => (typeof m === 'object' ? m.src : m)).find(() => true);
  } else if (entry.data.type === 'item-combined') {
    if (entry.data.items.length === 0) {
      return undefined;
    }

    const item = await getEntry(entry.data.items[0]);
    return item.data.icons.map((m) => (typeof m === 'object' ? m.src : m)).find(() => true);
  } else if (entry.data.type === 'building') {
    return entry.data.icon.src;
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
