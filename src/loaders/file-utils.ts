import { z } from 'astro/zod';
import fs from 'fs/promises';
import path from 'path';

/**
 * Read a JSON file in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param file the target file path.
 * @returns the output JSON object.
 */
export async function getJsonFile<T extends z.ZodSchema>(schema: T, file: string): Promise<z.infer<T>> {
  const content = await fs.readFile(file, 'utf-8');
  return parseZodSchema(schema, content);
}

/**
 * Read multiple JSON files in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param files the array of files to read.
 * @returns an object containing filenames and their content.
 */
export async function getAllJsonFiles<T extends z.ZodSchema>(
  schema: T,
  files: string[]
): Promise<Record<string, z.infer<T>>> {
  const contents = await Promise.all(
    files.map(async (file) => ({
      file,
      output: await fs.readFile(file, 'utf-8')
    }))
  );
  return contents.reduce<Record<string, z.infer<T>>>((previousValue, currentValue) => {
    previousValue[currentValue.file] = parseZodSchema(schema, currentValue.output);
    return previousValue;
  }, {});
}

/**
 * Read multiple JSON files in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param directory the directory to read all the files from.
 * @returns an object containing filenames and their content.
 */
export async function getAllJsonFilesInDirectory<T extends z.ZodSchema>(
  schema: T,
  directory: string
): Promise<Record<string, z.infer<T>>> {
  const files = await fs.readdir(directory, {
    encoding: 'utf-8',
    recursive: false,
    withFileTypes: true
  });
  return await getAllJsonFiles(
    schema,
    files.filter((file) => file.isFile()).map((file) => path.resolve(directory, file.name))
  );
}

/**
 * Internal parse function.
 * @param schema the zod schema to parse the files in.
 * @param value the raw string value.
 * @returns the parsed item following the schema.
 */
function parseZodSchema<T extends z.ZodSchema>(schema: T, value: string) {
  try {
    return schema.parse(JSON.parse(value));
  } catch (ex) {
    if (ex instanceof z.ZodError) {
      console.error('Issues parsing object:');
      console.error(value);
      console.error(ex.issues);
    }
    throw ex;
  }
}
