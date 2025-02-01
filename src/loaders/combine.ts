import type { Loader } from 'astro/loaders';
import type { BaseSchema, CollectionConfig } from 'astro:content';
import { simpleLoader } from 'node_modules/astro/dist/content/content-layer';

type LoaderOrFunc<S extends BaseSchema> = Extract<CollectionConfig<S>, { type: 'content_layer' }>;

export function combine<S extends BaseSchema>(...loaders: LoaderOrFunc<S>[]): Loader {
  return {
    name: 'combined-loader',
    load: async (context) => {
      for (const loader of loaders) {
        if (typeof loader === 'function') {
          await simpleLoader(loader, context);
        }
        // await loader.load(context);
      }
    }
  };
}
