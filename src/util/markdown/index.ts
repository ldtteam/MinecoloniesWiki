import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { CollectionEntry } from 'astro:content';
import type { TextDirective } from 'mdast-util-directive';
import type { State } from 'mdast-util-to-hast';
import remarkDirective from 'remark-directive';

import { rehypeBuildingPlugin } from './rehype/buildings';

const processor = createMarkdownProcessor({
  remarkPlugins: [remarkDirective],
  rehypePlugins: [rehypeBuildingPlugin],
  remarkRehype: {
    handlers: {
      textDirective: (state: State, node: TextDirective) => {
        return { type: 'element', tagName: node.name, properties: node.attributes ?? {}, children: state.all(node) };
      }
    }
  }
});

export async function formatMarkdownText(text: string, frontmatter?: CollectionEntry<'wiki'>['data']) {
  return (await (await processor).render(text, { frontmatter })).code;
}
