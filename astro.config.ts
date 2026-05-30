import markdoc from '@astrojs/markdoc';
import { unified } from '@astrojs/markdown-remark';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';

import imagePruner from './src/integration/image-pruner';
import symlinkBuilder from './src/integration/symlink-builder';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://minecolonies.com',
  markdown: {
    processor: unified(),
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables',
      wrap: true
    }
  },
  image: {
    domains: ['minecraft.wiki']
  },
  build: {
    concurrency: 1
  },
  integrations: [svelte(), icon(), markdoc(), sitemap(), purgecss(), symlinkBuilder(), imagePruner()],
  vite: {
    server: {
      hmr: {
        timeout: 120000
      }
    }
  }
});
