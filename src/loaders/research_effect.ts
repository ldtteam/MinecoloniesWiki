import type { ValidContentEntrySlug } from 'astro:content';
import type { ResearchEffect } from 'src/content/_research';

import { getAllJsonFiles, getTranslations } from './common';

interface ResearchEffectInternal {
  effect: boolean;
  levels: number[] | undefined;
}

export async function researchEffectLoader(): Promise<ResearchEffect[]> {
  const translations = await getTranslations();
  if (translations === undefined) {
    throw new Error('Failed to load translations, unable to generate ');
  }

  const researchEffects = await getAllJsonFiles<ResearchEffectInternal>(
    'minecolonies/src/datagen/generated/minecolonies/data/minecolonies/researches/effects'
  );

  return Object.entries(researchEffects).map(([filename, researchEffect]) => {
    const effectKey = filename.replace('.json', '');
    if (filename.startsWith('blockhut')) {
      return {
        id: effectKey,
        type: 'building',
        building: {
          collection: 'wiki',
          slug: ('buildings/' + effectKey.replace('blockhut', '')) as ValidContentEntrySlug<'wiki'>
        }
      };
    } else {
      return {
        id: effectKey,
        type: 'regular',
        format: translations[`com.minecolonies.research.effects.${effectKey}.description`],
        levels: researchEffect.levels
      };
    }
  });
}
