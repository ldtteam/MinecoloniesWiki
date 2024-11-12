import { getWikiDescription, getWikiImage, getWikiTitle } from '@utils/wiki';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { type CollectionEntry, getCollection } from 'astro:content';

interface SearchEntry {
  name: string | { title: string; versions: number[] }[];
  slug: string;
  excerpt: string;
  body: string;
  image: string | undefined;
}

const pages = await getCollection('wiki');

async function createSearchEntry(page: CollectionEntry<'wiki'>): Promise<SearchEntry> {
  const title = await getWikiTitle(page);
  const container = await AstroContainer.create();
  const { Content } = await page.render();
  const body = await container.renderToString(Content as unknown as AstroComponentFactory, {
    props: {
      frontmatter: page.data
    }
  });

  return {
    name:
      typeof title === 'string'
        ? title
        : title.map((item) => ({
            title: item.title,
            versions: item.versions.map((version) => version.data.order)
          })),
    slug: page.slug,
    excerpt: (await getWikiDescription(page)) ?? '',
    body: body.replace(/(<([^>]+)>)/gi, ''),
    image: (await getWikiImage(page)) ?? '/images/wiki/search/file.png'
  };
}

export const GET: APIRoute = async () => {
  const pageResults = await Promise.all(pages.map(createSearchEntry));
  return new Response(JSON.stringify(pageResults));
};
