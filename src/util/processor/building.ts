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
  const buildingDataPerVersion = await groupBuildingDataByVersion(buildingData);

  data.hName = frontmatter?.type !== 'building' || buildingId !== buildingData.id ? 'a' : 'span';
  if (data.hName === 'a') {
    data.hProperties = {
      href: getBuildingLink(buildingData)
    };
  }
  data.hChildren = buildingDataPerVersion.map((building) => ({
    type: 'element',
    tagName: 'span',
    children: [
      {
        type: 'text',
        value: plural ? building.item.data.plural : building.item.data.name
      }
    ],
    properties: {
      'data-versions': building.versions.map((version) => version.data.order).join(',')
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
