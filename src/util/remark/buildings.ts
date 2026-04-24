import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { type CollectionEntry, getCollection } from 'astro:content';
import type { TextDirective } from 'mdast-util-directive';
import { visit } from 'unist-util-visit';

import { getSortedVersions } from '../../util/version';

async function processBuilding(frontmatter: CollectionEntry<'wiki'>['data'] | undefined, node: TextDirective) {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const baseId = attributes.name ?? '';
  const plural = Boolean(attributes.plural ?? false);

  const versions = await getSortedVersions();
  const allVersionedBuildings = await getCollection('buildings', (b) => b.data.baseId === baseId);

  if (allVersionedBuildings.length === 0) {
    throw new Error(`Building with id ${baseId} does not exist.`);
  }

  data.hName = frontmatter?.type !== 'building' || frontmatter.id !== baseId ? 'a' : 'span';
  if (data.hName === 'a') {
    data.hProperties = {
      href: '/wiki/buildings/' + baseId
    };
  }

  const namesByValue = new Map<string, CollectionEntry<'versions'>[]>();
  for (const version of versions) {
    const entry = allVersionedBuildings.find((b) => b.data.version.id === version.id);
    if (entry === undefined) {
      continue;
    }
    const value = plural ? entry.data.plural : entry.data.name;
    if (!namesByValue.has(value)) {
      namesByValue.set(value, []);
    }
    const versions = namesByValue.get(value);
    if (versions) {
      versions.push(version);
    }
  }

  data.hChildren = [...namesByValue.entries()].map(([value, versionList]) => ({
    type: 'element',
    tagName: 'span',
    children: [{ type: 'text', value }],
    properties: {
      'data-versions': versionList.map((v) => v.data.order).join(',')
    }
  }));
}

export const buildingPlugin: (frontmatter: CollectionEntry<'wiki'>['data'] | undefined) => RemarkPlugin =
  (frontmatter) => () => async (tree) => {
    const promises: Promise<void>[] = [];

    visit(tree, 'textDirective', (node) => {
      if (node.name === 'building') {
        promises.push(processBuilding(frontmatter, node));
      }
    });

    await Promise.all(promises);
  };
