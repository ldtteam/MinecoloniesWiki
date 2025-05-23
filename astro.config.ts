import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://minecolonies.com',
  image: {
    domains: ['minecraft.wiki']
  },
  integrations: [svelte(), icon(), markdoc(), sitemap(), purgecss()]
});
