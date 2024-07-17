import { processDataText } from '@utils/processor';
import type { CollectionEntry } from 'astro:content';
import type { SchemaFieldTypeDefinition } from 'src/content/_wiki';

export async function buildJson(schema: CollectionEntry<'schemas'>, frontmatter: CollectionEntry<'wiki'>['data']) {
  const indentation = 2;
  let content = '';

  const fields = Object.entries(schema.data.shape);
  for (let i = 0; i < fields.length; i++) {
    const [field, def] = fields[i];
    const end = i === fields.length - 1 ? '' : ',';
    content += new Array(indentation).join(' ') + `"${field}": ${createValue(def.example, def.type)}${end}` + '\n';
  }

  return await processDataText(`\`\`\`json\n{\n${content}}\n\`\`\``, frontmatter);
}

export function createValue(example: string, type: SchemaFieldTypeDefinition): string {
  let typeToRender = type;
  if (Array.isArray(type)) {
    typeToRender = type[0];
  }
  switch (typeToRender) {
    case 'boolean':
    case 'integer':
    case 'double':
      return example;
    default:
      return `"${example}"`;
  }
}
