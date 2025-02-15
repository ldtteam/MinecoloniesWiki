import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { buildingPlugin } from '@utils/remark/buildings';
import type { CollectionEntry } from 'astro:content';
import remarkDirective from 'remark-directive';
import type { AnyField } from 'src/schemas/json_structures';

export async function formatText(text: string, frontmatter: CollectionEntry<'wiki'>['data']) {
  const processor = await createMarkdownProcessor({
    remarkPlugins: [remarkDirective, buildingPlugin(frontmatter)],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables',
      wrap: true
    }
  });
  return (await processor.render(text)).code;
}

async function buildTree(field: AnyField, object: Record<string, unknown>) {
  if (field.type === 'primitive' || field.type === 'array_primitive') {
    object[field.key] = field.example;
  } else if (field.type === 'object') {
    const childObj: Record<string, unknown> = {};
    for (const child of field.children) {
      buildTree(child, childObj);
    }
    object[field.key] = childObj;
  } else if (field.type === 'array') {
    const childObj: Record<string, unknown> = {};
    for (const child of field.children) {
      buildTree(child, childObj);
    }
    object[field.key] = [childObj];
  }
}

export async function buildJson(
  schema: CollectionEntry<'json_structures'>,
  frontmatter: CollectionEntry<'wiki'>['data']
) {
  const jsonObject: Record<string, unknown> = {};

  for (const field of schema.data.fields) {
    buildTree(field, jsonObject);
  }

  return formatText(`\`\`\`json\n${JSON.stringify(jsonObject, null, 4)}\n\`\`\``, frontmatter);
}
