import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

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

export async function getWikiTitle(entry: CollectionEntry<'wiki'>) {
  if (entry.data.type === 'page' || entry.data.type === 'item-combined') {
    return entry.data.title;
  } else if (entry.data.type === 'item') {
    const itemData = await getEntry('items', entry.data.item.id);
    return itemData.data.name;
  } else if (entry.data.type === 'building') {
    const buildingData = await getEntry('buildings', entry.data.building.id);
    if (buildingData === undefined) {
      throw new Error(`Building entry "${entry.data.building}" does not exist.`);
    }

    return buildingData.data.name;
  } else if (entry.data.type === 'worker') {
    const workerData = await getEntry('workers', entry.data.worker.id);
    if (workerData === undefined) {
      throw new Error(`Worker entry "${entry.data.worker}" does not exist.`);
    }

    return workerData.data.name;
  }

  return entry.id;
}

export async function getWikiPages(): Promise<WikiPages> {
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
        name: await getWikiTitle(entry),
        slug: entry.slug
      });
    }
  }

  return distributedPages;
}
