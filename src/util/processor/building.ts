import type { RemarkPlugin } from '@astrojs/markdown-remark';
import {
  getBuildingData,
  getBuildingIdFromFrontmatter,
  getBuildingLink,
  groupBuildingDataByVersion
} from '@utils/building';
import type { CollectionEntry } from 'astro:content';
import type { TextDirective } from 'mdast-util-directive';
import type { LeafDirective } from 'node_modules/mdast-util-directive/lib';
import { visit } from 'unist-util-visit';

async function processBuilding(frontmatter: CollectionEntry<'wiki'>['data'], node: LeafDirective | TextDirective) {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const name = attributes.name ?? '';
  const plural = Boolean(attributes.plural ?? false);

  const buildingId = await getBuildingIdFromFrontmatter(frontmatter);
  const buildingData = await getBuildingData(name);
  const buildingNames = await groupBuildingDataByVersion(buildingData, (data) => (plural ? data.plural : data.name));

  data.hName = frontmatter?.type !== 'building' || buildingId !== buildingData.id ? 'a' : 'span';
  if (data.hName === 'a') {
    data.hProperties = {
      href: getBuildingLink(buildingData)
    };
  }
  data.hChildren = buildingNames.map((buildingName) => ({
    type: 'element',
    tagName: 'span',
    children: [
      {
        type: 'text',
        value: buildingName.item.data
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

    visit(tree, (node) => {
      if ((node.type === 'leafDirective' || node.type === 'textDirective') && node.name === 'building') {
        promises.push(processBuilding(frontmatter, node));
      }
    });

    await Promise.all(promises);
  };
