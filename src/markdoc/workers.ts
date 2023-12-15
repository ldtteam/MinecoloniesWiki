import { component, Markdoc } from '@astrojs/markdoc/config';
import type { MarkdocWorkerComponent } from '@utils/workers';

import type { Tag } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getWorkerAttributes(attributes: Record<string, any>, config: Parameters<NonNullable<Tag["transform"]>>[1]): MarkdocWorkerComponent {
  const workerId = config.variables?.frontmatter?.worker?.id;
  if (Object.keys(attributes).includes("name")) {
    return {
      ...attributes,
      workerId,
      name: attributes.name
    };
  } else {
    return {
      ...attributes,
      workerId,
      name: workerId ?? ""
    }
  }
}

export const worker: Tag = {
  render: component('@components/markdoc/WorkerName.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: false
    },
    plural: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  transform: (node, config) => {
    const attributes = getWorkerAttributes(node.transformAttributes(config), config);
    const children = node.transformChildren(config);
    const render = config.tags!.worker.render;

    return new Markdoc.Tag(render, attributes, children);
  }
};

export const worker_infobox: Tag = {
  render: component('@components/markdoc/infobox/WorkerInfobox.astro'),
  transform: (node, config) => {
    const attributes = getWorkerAttributes(node.transformAttributes(config), config);
    const children = node.transformChildren(config);
    const render = config.tags!.worker_infobox.render;

    return new Markdoc.Tag(render, attributes, children);
  }
};