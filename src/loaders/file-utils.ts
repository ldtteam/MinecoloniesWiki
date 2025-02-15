import { z } from 'astro/zod';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'yaml';

type Parser = (value: string) => unknown;

/**
 * Read a JSON file in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param file the target file path.
 * @param parser how to initially parse the file. Defaults to JSON parsing.
 * @returns the output JSON object.
 */
export async function getJsonFile<T extends z.ZodSchema>(
  schema: T,
  file: string,
  parser: Parser = parseJson
): Promise<z.infer<T>> {
  const content = await fs.readFile(file, 'utf-8');
  return parseZodSchema(schema, content, parser);
}

/**
 * Read multiple JSON files in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param files the array of files to read.
 * @param parser how to initially parse the file. Defaults to JSON parsing.
 * @returns an object containing filenames and their content.
 */
export async function getAllJsonFiles<T extends z.ZodSchema>(
  schema: T,
  files: string[],
  parser: Parser = parseJson
): Promise<Record<string, z.infer<T>>> {
  const contents = await Promise.all(
    files.map(async (file) => ({
      file,
      output: await fs.readFile(file, 'utf-8')
    }))
  );
  return contents.reduce<Record<string, z.infer<T>>>((previousValue, currentValue) => {
    previousValue[currentValue.file] = parseZodSchema(schema, currentValue.output, parser);
    return previousValue;
  }, {});
}

/**
 * Read multiple files in UTF-8 encoding.
 * @param schema the zod schema to parse the files in.
 * @param directory the directory to read all the files from.
 * @param recursive whether to load all files recursively. Defaults to false.
 * @param parser how to initially parse the file. Defaults to JSON parsing.
 * @returns an object containing filenames and their content.
 */
export async function getAllFilesInDirectory<T extends z.ZodSchema>(
  schema: T,
  directory: string,
  recursive: boolean = false,
  parser: Parser = parseJson
): Promise<Record<string, z.infer<T>>> {
  const files = await fs.readdir(directory, {
    encoding: 'utf-8',
    recursive,
    withFileTypes: true
  });
  return await getAllJsonFiles(
    schema,
    files.filter((file) => file.isFile()).map((file) => path.resolve(file.parentPath, file.name)),
    parser
  );
}

/**
 * Internal parse function.
 * @param schema the zod schema to parse the files in.
 * @param value the raw string value.
 * @returns the parsed item following the schema.
 */
function parseZodSchema<T extends z.ZodSchema>(schema: T, value: string, parser: Parser) {
  try {
    return schema.parse(parser(value));
  } catch (ex) {
    if (ex instanceof z.ZodError) {
      console.error('Issues parsing object:');
      console.error(value);
      console.error(ex.issues);
    }
    throw ex;
  }
}

/**
 * Parser function for parsing JSON data.
 * @param value the input value.
 * @returns the output object.
 */
export function parseJson(value: string) {
  return JSON.parse(value);
}

/**
 * Parser funtcion for parsing YAML data.
 * @param value the input value.
 * @returns the output object.
 */
export function parseYaml(value: string) {
  return yaml.parse(value);
}
