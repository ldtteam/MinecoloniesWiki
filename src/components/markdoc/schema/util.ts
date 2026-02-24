import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { CollectionEntry } from 'astro:content';
import remarkDirective from 'remark-directive';

import type { AnyField } from '../../../schemas/json_structures';
import { buildingPlugin } from '../../../util/remark/buildings';

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

function cartesian(arrays: Record<string, unknown>[][]): Record<string, unknown>[] {
  return arrays.reduce((acc, curr) => acc.flatMap((a) => curr.map((b) => ({ ...a, ...b }))), [{}] as Record<
    string,
    unknown
  >[]);
}

function buildTree(field: AnyField): Record<string, unknown>[] {
  if (field.type === 'primitive' || field.type === 'enum' || field.type === 'array_primitive') {
    return [{ [field.key]: field.example }];
  } else if (field.type === 'object') {
    const childResults = field.children.map(buildTree);
    return cartesian(childResults).map((obj) => ({ [field.key]: obj }));
  } else if (field.type === 'array') {
    const childResults = field.children.map(buildTree);
    const allVariants = cartesian(childResults);
    return [{ [field.key]: allVariants }];
  } else {
    return field.variants.flatMap((variant) => {
      const variantChildResults = variant.children.map(buildTree);
      const variantObjects = cartesian(variantChildResults);
      return variantObjects.map((obj) => ({ [field.key]: variant.value, ...obj }));
    });
  }
}

export async function buildJson(
  schema: CollectionEntry<'json_structures'>,
  frontmatter: CollectionEntry<'wiki'>['data']
) {
  const fieldResults = schema.data.fields.map(buildTree);
  const examples = cartesian(fieldResults);

  const blocks = examples.map((example) => `\`\`\`json\n${JSON.stringify(example, null, 4)}\n\`\`\``).join('\n\n');

  return formatText(blocks, frontmatter);
}
