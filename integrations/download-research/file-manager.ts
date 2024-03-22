import fs from 'fs/promises';
import path from 'path';

export async function writeContentCollectionFile(key: string, name: string, content: string) {
  const fullPath = path.resolve(`src/content/${key}`);
  await fs.writeFile(`${fullPath}${path.sep}${name}`, content);
}

export async function getJsonFile<T extends object>(file: string): Promise<T> {
  const content = await fs.readFile(file, 'utf-8');
  return JSON.parse(content);
}

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
