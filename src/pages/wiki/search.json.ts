import { getWikiDescription, getWikiImage, getWikiTitle } from '@utils/wiki';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SearchEntry {
  name: string | { title: string; versions: number[] }[];
  slug: string;
  excerpt: string;
  body: string;
  image: string | undefined;
}

const pages = await getCollection('wiki');

export const GET: APIRoute = async () => {
  const pageResults: SearchEntry[] = await Promise.all(
    pages.map(async (page) => {
      const title = await getWikiTitle(page);
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
        body: page.body,
        image: (await getWikiImage(page)) ?? '/images/wiki/search/file.png'
      };
    })
  );
  return new Response(JSON.stringify(pageResults));
};
