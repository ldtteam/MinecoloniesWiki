import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getBuildingData, getBuildingLink, getBuildingName } from './building';
import { getItemData } from './items';
import { combineVersionedTitles, type TitleVersionItem, type TitleVersions } from './version';

export type Title = string | TitleVersions;

interface WikiPageEntry {
  type: 'page';
  name: string | TitleVersionItem;
  slug: string;
}

interface WikiSubCategoryEntry {
  type: 'subcategory';
  name: string;
  pages: WikiPageEntry[];
}

type WikiPage = WikiSubCategoryEntry | WikiPageEntry;

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

  if (entry.data.type === 'page' || entry.data.type === 'item-combined' || entry.data.type === 'section-group') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const itemData = await getEntry('items', entry.data.item.id);
    return itemData.data.name;
  } else if (entry.data.type === 'section') {
    return await getSectionTitle(entry, true);
  } else if (entry.data.type === 'building') {
    const buildingData = await getBuildingData(entry.data.building.id);

    return combineVersionedTitles(
      await Promise.all(
        versions.map(async (version) => ({
          version,
          title: await getBuildingName(version, buildingData)
        }))
      )
    );
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
    const buildingData = await getEntry(entry.data.building);
    return buildingData.data.description;
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
    const buildingData = await getBuildingData(entry.data.building.id);
    return buildingData.data.icon.src;
  }
}

async function extractPageTitles(entry: CollectionEntry<'wiki'>): Promise<WikiPageEntry[]> {
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

export async function getWikiPages(): Promise<WikiPages> {
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

    distributedPages.get(category)!.push(...(await extractPageTitles(entry)));
  }

  for (const worker of await getCollection('workers')) {
    const category = wikiCategories.find((f) => f.id === 'workers');
    const building = await getEntry('buildings', worker.data.primaryBuilding.id);
    if (category !== undefined) {
      distributedPages.get(category)!.push({
        type: 'page',
        name: worker.data.name,
        slug: 'buildings/' + building.id
      });
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
