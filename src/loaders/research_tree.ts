import type { ResearchTree } from 'src/content/_research';

import { getAllJsonFiles, getTranslations } from './common';

export interface ResearchTreeInternal {
  'branch-name': string;
}

export async function researchTreeLoader(): Promise<ResearchTree[]> {
  const translations = await getTranslations();
  if (translations === undefined) {
    throw new Error('Failed to load translations, unable to generate ');
  }
  const researchTrees = await getAllJsonFiles<ResearchTreeInternal>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches'
  );

  return Object.entries(researchTrees).map(([filename, researchTree]) => {
    const researchTreeKey = filename.replace('.json', '');
    const name = translations[researchTree['branch-name']];

    return {
      id: researchTreeKey,
      name: name
    };
  });
}
