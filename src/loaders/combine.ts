import type { Loader } from 'astro/loaders';
import type { BaseSchema } from 'astro:content';
import { simpleLoader } from 'node_modules/astro/dist/content/content-layer';

type Loaders<TData extends { id: string }> =
  | Loader
  | (() =>
      | Array<TData>
      | Promise<Array<TData>>
      | Record<string, Omit<TData, 'id'> & { id?: string }>
      | Promise<Record<string, Omit<TData, 'id'> & { id?: string }>>);

export function combine<S extends BaseSchema>(...loaders: Loaders<S>[]): Loader {
  return {
    name: 'combined-loader',
    load: async (context) => {
      for (const loader of loaders) {
        if (typeof loader === 'function') {
          await simpleLoader(loader, context);
        } else {
          await loader.load(context);
        }
      }
    }
  };
}
