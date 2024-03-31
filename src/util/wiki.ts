import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getBuildingData, getBuildingName } from './building';
import { getItemData } from './items';
import { combineVersionedTitles, type TitleVersions } from './version';
import { getWorkerData, getWorkerName } from './workers';

export type Title = string | TitleVersions;

interface WikiPageEntry {
  type: 'page';
  name: Title;
  slug: string;
}

interface WikiSubCategoryEntry {
  type: 'subcategory';
  name: string;
  pages: WikiPageEntry[];
}

type WikiPages = Record<
  string,
  {
    type: CollectionEntry<'wiki_categories'>;
    pages: (WikiSubCategoryEntry | WikiPageEntry)[];
  }
>;

const WorkerPageTypes: Record<CollectionEntry<'workers'>['data']['type'], string> = {
  animals: 'Animals',
  crafter: 'Crafters',
  gatherer: 'Gatherers',
  guard: 'Guards',
  other: 'Other'
};

function isSubCategory(entry: WikiSubCategoryEntry | WikiPageEntry): entry is WikiSubCategoryEntry {
  return entry.type === 'subcategory';
}

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
  } else if (entry.data.type === 'worker') {
    const workerData = await getWorkerData(entry.data.worker.id);

    return combineVersionedTitles(
      await Promise.all(
        versions.map(async (version) => ({
          version,
          title: await getWorkerName(version, workerData)
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
  } else if (entry.data.type === 'worker') {
    const workerData = await getEntry(entry.data.worker);
    return workerData.data.description;
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
  } else if (entry.data.type === 'worker') {
    const workerData = await getWorkerData(entry.data.worker.id);
    return workerData.data.icon.src;
  }
}

export async function getWikiPages(): Promise<WikiPages> {
  const wikiPages = await getCollection('wiki', (page) => page.slug.indexOf('/') > 0 && page.data.type !== 'section');
  const wikiCategories = (await getCollection('wiki_categories')).sort((a, b) => a.data.order - b.data.order);

  const distributedPages: WikiPages = {};
  wikiCategories.forEach((category) => {
    distributedPages[category.id] = {
      type: category,
      pages: []
    };
  });

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

    if (categoryString === 'workers' && entry.data.type === 'worker') {
      const workerData = await getEntry('workers', entry.data.worker.id);
      if (workerData !== undefined) {
        const subCategoryName = WorkerPageTypes[workerData.data.type];
        let subCategory = distributedPages[category.id].pages
          .filter(isSubCategory)
          .find((f) => f.name === subCategoryName);

        if (subCategory === undefined) {
          subCategory = {
            type: 'subcategory',
            name: WorkerPageTypes[workerData.data.type],
            pages: []
          };
          distributedPages[category.id].pages.push(subCategory);
        }

        subCategory.pages.push({
          name: workerData.data.name,
          slug: entry.slug,
          type: 'page'
        });
      }
    } else {
      distributedPages[category.id].pages.push({
        type: 'page',
        name: await getWikiTitle(entry),
        slug: entry.data.type === 'section-group' ? entry.data.initialSection.slug : entry.slug
      });
    }
  }

  return distributedPages;
}
