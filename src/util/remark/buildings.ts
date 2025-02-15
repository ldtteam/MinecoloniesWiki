import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { getOverrideValues } from '@utils/override';
import { type CollectionEntry, getEntry } from 'astro:content';
import type { TextDirective } from 'mdast-util-directive';
import { visit } from 'unist-util-visit';

async function processBuilding(frontmatter: CollectionEntry<'wiki'>['data'], node: TextDirective) {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const name = attributes.name ?? '';
  const plural = Boolean(attributes.plural ?? false);

  const buildingData = await getEntry('buildings', name);
  if (buildingData === undefined) {
    throw new Error(`Building with id ${name} does not exist.`);
  }

  const namePerVersion = await getOverrideValues(buildingData.data, (v) => (plural ? v.plural : v.name));

  data.hName = frontmatter.type !== 'building' || frontmatter.id !== buildingData.id ? 'a' : 'span';
  if (data.hName === 'a') {
    data.hProperties = {
      href: '/wiki/buildings/' + buildingData.id
    };
  }
  data.hChildren = namePerVersion.values.map((buildingName) => ({
    type: 'element',
    tagName: 'span',
    children: [
      {
        type: 'text',
        value: buildingName.value
      }
    ],
    properties: {
      'data-versions': buildingName.versions.map((version) => version.data.order).join(',')
    }
  }));
}

export const buildingPlugin: (frontmatter: CollectionEntry<'wiki'>['data']) => RemarkPlugin =
  (frontmatter) => () => async (tree) => {
    const promises: Promise<void>[] = [];

    visit(tree, 'textDirective', (node) => {
      if (node.name === 'building') {
        promises.push(processBuilding(frontmatter, node));
      }
    });

    await Promise.all(promises);
  };
