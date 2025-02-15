import {
  type CollectionEntry,
  getCollection,
  getEntry,
  type InferEntrySchema,
  type ValidContentEntrySlug
} from 'astro:content';

import { getItemData } from './items';
import { getOverrideValues } from './override';
import type { VersionedResult } from './version';

export type Title = string | VersionedResult;

interface WikiPageType {
  type: 'page';
  id: string;
  name: Title;
}

interface WikiSubCategoryType {
  type: 'subcategory';
  name: Title;
  pages: WikiPageEntry[];
}

type WikiPage = WikiSubCategoryType | WikiPageType;

type WikiPages = Map<CollectionEntry<'wiki_categories'>, WikiPage[]>;

export async function getWikiTitle(entry: CollectionEntry<'wiki'>): Promise<Title> {
  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const item = await getEntry(entry.data.item);
    const itemData = await getItemData(item);
    return itemData.defaultName;
  } else if (entry.data.type === 'building') {
    const building = await getEntry('buildings', entry.data.id);
    if (building === undefined) {
      return entry.id;
    }
    return await getOverrideValues(building.data, (v) => v.name);
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
    const itemData = await getItemData(item, true);
    return itemData.data
      .flatMap((m) => m.icons)
      .map((m) => (typeof m === 'object' ? m.src : m))
      .find((_) => true);
  } else if (entry.data.type === 'item-combined') {
    if (entry.data.items.length === 0) {
      return undefined;
    }

    const item = await getEntry(entry.data.items[0]);
    const itemData = await getItemData(item, true);
    return itemData.data
      .flatMap((m) => m.icons)
      .map((m) => (typeof m === 'object' ? m.src : m))
      .find((_) => true);
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

type WikiPageTypes = InferEntrySchema<'wiki'>['type'];

export type WikiPageEntry<T extends WikiPageTypes> = Omit<CollectionEntry<'wiki'>, 'data'> & {
  data: Extract<CollectionEntry<'wiki'>['data'], { type: T }>;
};

export type WikiPageData<T extends WikiPageTypes> = WikiPageEntry<T>['data'];

export function isWikiDataOfType<T extends WikiPageTypes>(
  data: CollectionEntry<'wiki'>['data'],
  type: T
): data is WikiPageEntry<T>['data'] {
  return data.type === type;
}

export function isWikiPageOfType<T extends WikiPageTypes>(
  page: Omit<CollectionEntry<'wiki'>, 'id'> & { id: string },
  type: T
): page is WikiPageEntry<T> {
  return isWikiDataOfType(page.data, type);
}

export function getWikiPages<T extends WikiPageTypes>(type: T): Promise<WikiPageEntry<T>[]> {
  return getCollection('wiki', (page) => isWikiPageOfType(page, type));
}

type GetWikiPageResult<T extends WikiPageTypes, E extends string> =
  E extends ValidContentEntrySlug<'wiki'> ? WikiPageEntry<T> : WikiPageEntry<T> | undefined;

export async function getWikiPage<T extends WikiPageTypes, E extends string>(
  type: T,
  name: E
): Promise<GetWikiPageResult<T, E>> {
  const page = await getEntry('wiki', name);
  if (page === undefined) {
    return undefined as GetWikiPageResult<T, E>;
  }

  if (!isWikiPageOfType(page, type)) {
    throw Error(
      `Page ${name} for type ${type} is not of correct type, type provided in the file is ${page.data.type}.`
    );
  }

  return page;
}
