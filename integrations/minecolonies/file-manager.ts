import fs from 'fs/promises';
import path from 'path';

export interface FileInfo<T> {
  filename: string;
  content: T;
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

/**
 * Writes the provided content to a content collection file.
 * @param key which content collection to store the data in.
 * @param name the path to the file.
 * @param content the content to store in the file.
 * @returns true if the content has changed.
 */
export async function writeContentCollectionFile(key: string, name: string, content: string): Promise<boolean> {
  const fullPath = path.resolve(`src/content/${key}/${name}`);
  try {
    const currentContent = await fs.readFile(fullPath, 'utf-8');
    if (currentContent === content) {
      return false;
    }
  } catch {
    // Ignore error
  } finally {
    await fs.writeFile(fullPath, content);
  }
  return true;
}
