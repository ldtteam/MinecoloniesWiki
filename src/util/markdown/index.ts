import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { CollectionEntry } from 'astro:content';
import remarkDirective from 'remark-directive';

import { rehypeBuildingPlugin } from './rehype/buildings';

const processor = createMarkdownProcessor({
  remarkPlugins: [remarkDirective],
  rehypePlugins: [rehypeBuildingPlugin]
});

export async function formatMarkdownText(text: string, frontmatter?: CollectionEntry<'wiki'>['data']) {
  return (await (await processor).render(text, { frontmatter })).code;
}
