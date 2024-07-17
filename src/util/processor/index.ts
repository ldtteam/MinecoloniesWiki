import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { CollectionEntry } from 'astro:content';
import remarkDirective from 'remark-directive';

import { buildingPlugin } from './building';
import { workerPlugin } from './worker';

export async function processDataText(text: string, frontmatter: CollectionEntry<'wiki'>['data']) {
  const processor = await createMarkdownProcessor({
    remarkPlugins: [remarkDirective, buildingPlugin(frontmatter), workerPlugin(frontmatter)],
    shikiConfig: {
      theme: 'css-variables',
      wrap: true
    }
  });
  return (await processor.render(text)).code;
}
