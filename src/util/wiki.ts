import {
  type CollectionEntry,
  getCollection,
  getEntry,
  type InferEntrySchema,
  type ValidContentEntrySlug
} from 'astro:content';

import { getBuildingDataForVersion } from './building';
import { getItemData } from './items';
import { groupDataByVersion } from './version';

export interface TitleVersionItem {
  title: string;
  versions: CollectionEntry<'versions'>[];
}

type TitleVersions = TitleVersionItem[];

export type Title = string | TitleVersions;

interface WikiPageType {
  type: 'page';
  name: string | TitleVersionItem;
  slug: string;
}

interface WikiSubCategoryType {
  type: 'subcategory';
  name: string;
  pages: WikiPageType[];
}

type WikiPage = WikiSubCategoryType | WikiPageType;

type WikiPages = Map<CollectionEntry<'wiki_categories'>, WikiPage[]>;

export async function getSectionTitle(entry: CollectionEntry<'wiki'>, includeGroup: boolean): Promise<string> {
  if (entry.data.type === 'section') {
    if (includeGroup) {
      const groupEntry = await getEntry(entry.data.group);
      if (groupEntry?.data.type === 'section-group') {
        return `${groupEntry.data.title} - ${entry.data.title}`;
      }
      throw new Error(
        `Section '${entry.id}' is referring to group '${groupEntry?.id}' which is not of type 'section-group'. Found type is '${groupEntry?.data.type}'.`
      );
    } else {
      return entry.data.title;
    }
  }
  return entry.id;
}

export async function getWikiTitle(entry: CollectionEntry<'wiki'>): Promise<Title> {
  const versions = await getCollection('versions');

  if (
    isWikiPageOfType(entry, 'page') ||
    isWikiPageOfType(entry, 'item-combined') ||
    isWikiPageOfType(entry, 'section-group')
  ) {
    return entry.data.title;
  } else if (isWikiPageOfType(entry, 'item')) {
    const itemData = await getEntry('items', entry.data.item.id);
    return itemData.data.name;
  } else if (isWikiPageOfType(entry, 'section')) {
    return await getSectionTitle(entry, true);
  } else if (isWikiPageOfType(entry, 'building')) {
    const buildingNames = await Promise.all(
      versions.map(async (version) => ({
        version,
        data: await getBuildingDataForVersion(entry.data, version).then((data) => data.name)
      }))
    );
    return groupDataByVersion(buildingNames, (item) => item).map((item) => ({
      title: item.item,
      versions: item.versions
    }));
  }

  return entry.id;
}

export async function getWikiDescription(entry: CollectionEntry<'wiki'>): Promise<string | undefined> {
  if (
    entry.data.type === 'page' ||
    entry.data.type === 'section-group' ||
    entry.data.type === 'section' ||
    entry.data.type === 'item-combined'
  ) {
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
  if (entry.data.type === 'page' || entry.data.type === 'section-group' || entry.data.type === 'section') {
    return entry.data.image?.src;
  } else if (entry.data.type === 'item') {
    const itemData = await getItemData(entry.data.item.id, true);
    return itemData.data
      .flatMap((m) => m.icons)
      .map((m) => (typeof m === 'object' ? m.src : m))
      .find((_) => true);
  } else if (entry.data.type === 'item-combined') {
    if (entry.data.items.length === 0) {
      return undefined;
    }

    const itemData = await getItemData(entry.data.items[0].id, true);
    return itemData.data
      .flatMap((m) => m.icons)
      .map((m) => (typeof m === 'object' ? m.src : m))
      .find((_) => true);
  } else if (entry.data.type === 'building') {
    return entry.data.icon.src;
  }
}

async function extractPageTitles(entry: CollectionEntry<'wiki'>): Promise<WikiPageType[]> {
  const title = await getWikiTitle(entry);
  if (typeof title === 'string') {
    return [
      {
        type: 'page',
        name: title,
        slug: entry.data.type === 'section-group' ? entry.data.initialSection.slug : entry.slug
      }
    ];
  }

  return title.map((titleVersion) => ({
    type: 'page',
    name: titleVersion,
    slug: entry.data.type === 'section-group' ? entry.data.initialSection.slug : entry.slug
  }));
}

export async function getAllWikiPages(): Promise<WikiPages> {
  const wikiPages = await getCollection('wiki', (page) => page.slug.indexOf('/') > 0 && page.data.type !== 'section');
  const wikiCategories = (await getCollection('wiki_categories')).sort((a, b) => a.data.order - b.data.order);

  const distributedPages = wikiCategories.reduce<WikiPages>((prev, curr) => prev.set(curr, []), new Map());

  for (const entry of wikiPages) {
    const categoryString = entry.slug.substring(0, entry.slug.indexOf('/'));
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
      pages.push(...(await extractPageTitles(entry)));
    }
  }

  for (const worker of await getCollection('workers')) {
    const category = wikiCategories.find((f) => f.id === 'workers');
    if (category !== undefined) {
      const pages = distributedPages.get(category);
      if (pages !== undefined) {
        pages.push({
          type: 'page',
          name: worker.data.name,
          slug: worker.data.primaryBuilding.slug
        });
      }
    }
  }

  for (const pages of distributedPages.values()) {
    pages.sort((a, b) =>
      (typeof a.name === 'string' ? a.name : a.name.title).localeCompare(
        typeof b.name === 'string' ? b.name : b.name.title
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
