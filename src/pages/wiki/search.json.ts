import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { type CollectionEntry, getCollection, render } from 'astro:content';

import { getWikiImage, getWikiTitle } from '../../util/wiki';

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
  const { Content } = await render(page);
  const container = await AstroContainer.create();
  const body = await container.renderToString(Content, {
    props: {
      id: page.id,
      frontmatter: page.data
    }
  });

  return {
    name: typeof title === 'string' ? title : title.highestValue,
    slug: page.id,
    excerpt: page.data.description ?? '',
    body: body.replace(/(<([^>]+)>)/gi, ''),
    image: (await getWikiImage(page)) ?? '/images/wiki/search/file.png'
  };
}

const isBuild = true; // import.meta.env.MODE === 'production';

export const GET: APIRoute = async () => {
  const pageResults: SearchEntry[] = [];
  const total = pages.length;

  for (let i = 0; i < total; i++) {
    const page = pages[i];
    if (isBuild) {
      console.log(`[search.json] Processing page ${i + 1}/${total}: ${page.id}`);
    }
    pageResults.push(await createSearchEntry(page));
  }

  if (isBuild) {
    console.log(`[search.json] Completed processing ${total} pages`);
  }

  return new Response(JSON.stringify(pageResults));
};
