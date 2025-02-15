import { getWikiDescription, getWikiImage, getWikiTitle } from '@utils/wiki';
import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { type CollectionEntry, getCollection, render } from 'astro:content';

interface SearchEntry {
  name: string | { title: string; versions: number[] }[];
  slug: string;
  excerpt: string;
  body: string;
  image: string | undefined;
}

const pages = await getCollection('wiki');
const container = await AstroContainer.create();

async function createSearchEntry(page: CollectionEntry<'wiki'>): Promise<SearchEntry> {
  const title = await getWikiTitle(page);
  const { Content } = await render(page);
  const container = await AstroContainer.create();
  const body = await container.renderToString(Content, {
    props: {
      frontmatter: page.data
    }
  });

  return {
    name: typeof title === 'string' ? title : title.highestValue,
    slug: page.id,
    excerpt: (await getWikiDescription(page)) ?? '',
    body: body.replace(/(<([^>]+)>)/gi, ''),
    image: (await getWikiImage(page)) ?? '/images/wiki/search/file.png'
  };
}

export const GET: APIRoute = async () => {
  const pageResults = await Promise.all(pages.map(createSearchEntry));
  return new Response(JSON.stringify(pageResults));
};
