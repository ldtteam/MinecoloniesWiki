import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

import { getBuildingData, getBuildingName } from './building';
import { getWorkerData } from './workers';

interface WikiPageEntry {
  type: 'page';
  name: string;
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

export async function getWikiTitle(version: CollectionEntry<'versions'>, entry: CollectionEntry<'wiki'>) {
  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const itemData = await getEntry('items', entry.data.item.id);
    return itemData.data.name;
  } else if (entry.data.type === 'building') {
    const buildingData = await getBuildingData(entry.data.building.id);
    return await getBuildingName(version, buildingData);
  } else if (entry.data.type === 'worker') {
    const workerData = await getWorkerData(entry.data.worker.id);
    return workerData.data.name;
  }

  return entry.id;
}

export async function getWikiPages(version: CollectionEntry<'versions'>): Promise<WikiPages> {
  const wikiPages = await getCollection('wiki', (page) => page.slug.indexOf('/') > 0);
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
        name: await getWikiTitle(version, entry),
        slug: entry.slug
      });
    }
  }

  return distributedPages;
}
