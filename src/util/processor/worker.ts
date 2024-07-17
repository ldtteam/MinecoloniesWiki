import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { getBuildingLink } from '@utils/building';
import {
  getWorkerData,
  getWorkerIdFromFrontmatter,
  getWorkerReferenceBuilding,
  groupWorkerDataByVersion
} from '@utils/workers';
import { type CollectionEntry } from 'astro:content';
import type { TextDirective } from 'mdast-util-directive';
import type { LeafDirective } from 'node_modules/mdast-util-directive/lib';
import { visit } from 'unist-util-visit';

async function processWorker(frontmatter: CollectionEntry<'wiki'>['data'], node: LeafDirective | TextDirective) {
  const data = node.data || (node.data = {});
  const attributes = node.attributes || {};
  const name = attributes.name ?? '';
  const plural = Boolean(attributes.plural ?? false);
  const building = attributes.building ?? undefined;

  const workerId = await getWorkerIdFromFrontmatter(frontmatter);
  const workerData = await getWorkerData(name);
  const WorkerNames = await groupWorkerDataByVersion(workerData, (data) => (plural ? data.plural : data.name));
  const referenceBuilding = await getWorkerReferenceBuilding(building, frontmatter, workerData);

  data.hName = frontmatter?.type !== 'building' || workerId !== workerData.id ? 'a' : 'span';
  if (data.hName === 'a') {
    data.hProperties = {
      href: getBuildingLink(referenceBuilding)
    };
  }
  data.hChildren = WorkerNames.map((buildingName) => ({
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

export const workerPlugin: (frontmatter: CollectionEntry<'wiki'>['data']) => RemarkPlugin =
  (frontmatter) => () => async (tree) => {
    const promises: Promise<void>[] = [];

    visit(tree, (node) => {
      if ((node.type === 'leafDirective' || node.type === 'textDirective') && node.name === 'worker') {
        promises.push(processWorker(frontmatter, node));
      }
    });

    await Promise.all(promises);
  };
