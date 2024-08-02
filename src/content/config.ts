import { researchCollection, researchEffectCollection, researchTreeCollection } from './_research';
import { eventCollection, sponsorCollection, supporterCollection, teamCollection } from './_site';
import { versionsCollection } from './_version';
import {
  citizenNamesCollection,
  itemsCollection,
  metaCollection,
  recipesCollection,
  tagsCollection,
  wikiCategories,
  wikiCollection,
  workersCollection
} from './_wiki';

export const collections = {
  wiki: wikiCollection,
  wiki_categories: wikiCategories,
  workers: workersCollection,
  tags: tagsCollection,
  items: itemsCollection,
  recipes: recipesCollection,
  research_tree: researchTreeCollection,
  research_effect: researchEffectCollection,
  research: researchCollection,
  versions: versionsCollection,
  citizen_name_packs: citizenNamesCollection,
  meta: metaCollection,
  team: teamCollection,
  sponsors: sponsorCollection,
  supporters: supporterCollection,
  events: eventCollection
};
