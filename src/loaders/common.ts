import fs from 'fs/promises';
import path from 'path';

export type Translations = Record<string, string>;

export interface FileInfo<T> {
  filename: string;
  content: T;
}

/**
 * Get all of the mod translations.
 * @returns the map of translation keys and values.
 */
export async function getTranslations(): Promise<Translations | undefined> {
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

/**
 * Read a JSON file in UTF-8 encoding.
 * @param file the target file path.
 * @returns the output JSON object.
 */
export async function getJsonFile<T extends object>(file: string): Promise<T> {
  const content = await fs.readFile(file, 'utf-8');
  return JSON.parse(content);
}

/**
 * Read multiple JSON files in UTF-8 encoding.
 * @param directory the directory to read all the files from.
 * @returns an object containing filenames and their content.
 */
export async function getAllJsonFiles<T extends object>(directory: string): Promise<Record<string, T>> {
  const files = await fs.readdir(directory, {
    encoding: 'utf-8',
    recursive: false,
    withFileTypes: true
  });
  const contents = await Promise.all(
    files
      .filter((file) => file.isFile())
      .map(async (file) => ({
        file,
        output: await fs.readFile(path.join(directory, file.name), 'utf-8')
      }))
  );
  return contents.reduce<Record<string, T>>((previousValue, currentValue) => {
    previousValue[currentValue.file.name] = JSON.parse(currentValue.output);
    return previousValue;
  }, {});
}
