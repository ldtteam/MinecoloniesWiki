import type { RehypePlugin } from '@astrojs/markdown-remark';
import type { Element, ElementContent } from 'hast';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

import { getSortedVersions } from '../../version';

async function processBuilding(file: VFile, node: Element, index: number, parent: Element) {
  const frontmatter = file.data.astro?.frontmatter;
  const baseId = String(node.properties.name ?? '');
  const plural = node.properties.plural !== undefined && node.properties.plural !== false;

  const versions = await getSortedVersions();

  const { getCollection } = await import('astro:content');
  const allVersionedBuildings = await getCollection('buildings', (b) => b.data.baseId === baseId);

  if (allVersionedBuildings.length === 0) {
    throw new Error(`Building with id ${baseId} does not exist.`);
  }

  const namesByValue = new Map<string, (typeof versions)[number][]>();
  for (const version of versions) {
    const entry = allVersionedBuildings.find((b) => b.data.version.id === version.id);
    if (entry === undefined) {
      continue;
    }
    const value = plural ? entry.data.plural : entry.data.name;
    let versionList = namesByValue.get(value);
    if (versionList === undefined) {
      versionList = [];
      namesByValue.set(value, versionList);
    }
    versionList.push(version);
  }

  const children: ElementContent[] = [...namesByValue.entries()].map(([value, versionList]) => ({
    type: 'element',
    tagName: 'span',
    properties: {
      'data-versions': versionList.map((v) => v.data.order).join(',')
    },
    children: [{ type: 'text', value }]
  }));

  const isCurrentPage = frontmatter?.type === 'building' && frontmatter.id === baseId;
  const replacement: Element = isCurrentPage
    ? { type: 'element', tagName: 'span', properties: {}, children }
    : { type: 'element', tagName: 'a', properties: { href: '/wiki/buildings/' + baseId }, children };

  parent.children[index] = replacement;
}

export function rehypeBuildingPlugin(): ReturnType<RehypePlugin> {
  return async (tree, file) => {
    const promises: Promise<void>[] = [];

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'building' && index !== undefined && parent !== undefined) {
        promises.push(processBuilding(file, node, index, parent as Element));
      }
    });

    await Promise.all(promises);
  };
}
