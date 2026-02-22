import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';

import symlinkBuilder from './src/integration/symlink-builder';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://minecolonies.com',
  image: {
    domains: ['minecraft.wiki']
  },
  integrations: [svelte(), icon(), markdoc(), sitemap(), purgecss(), symlinkBuilder()]
});
