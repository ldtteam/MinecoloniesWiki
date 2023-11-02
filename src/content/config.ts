import { researchCollection, researchEffectCollection, researchTreeCollection } from './_research';
import { eventCollection, sponsorCollection, supporterCollection, teamCollection } from './_site';
import { versionsCollection } from './_version';
import { buildingsCollection, recipesCollection, wikiCategories, wikiCollection, workersCollection } from './_wiki';

export const collections = {
  wiki: wikiCollection,
  wiki_categories: wikiCategories,
  buildings: buildingsCollection,
  workers: workersCollection,
  recipes: recipesCollection,
  research_tree: researchTreeCollection,
  research_effect: researchEffectCollection,
  research: researchCollection,
  versions: versionsCollection,
  team: teamCollection,
  sponsors: sponsorCollection,
  supporters: supporterCollection,
  events: eventCollection
};
