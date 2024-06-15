import { getJsonFile } from '../file-manager';
import { Translations } from './types';

export default async function getTranslations(): Promise<Translations | undefined> {
  const modTranslations = await getJsonFile<Translations>(
    'minecolonies/src/main/resources/assets/minecolonies/lang/manual_en_us.json'
  );
  const researchTranslations = await getJsonFile<Translations>(
    'minecolonies/src/datagen/generated/minecolonies/assets/minecolonies/lang/default.json'
  );
  if (modTranslations == undefined || researchTranslations === undefined) {
    return undefined;
  }

  return { ...modTranslations, ...researchTranslations };
}
