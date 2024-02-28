import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { register } from 'swiper/element/bundle';

import { downloadResearch } from './integrations/download-research';
register();

// https://astro.build/config
export default defineConfig({
  site: 'https://minecolonies.com',
  integrations: [
    svelte(),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        'fa6-solid': ['*'],
        'fa6-regular': ['*'],
        'fa6-brands': ['*']
      }
    }),
    markdoc(),
    sitemap(),
    downloadResearch({
      runOnReload: true,
      cacheValidityTime: 168
    })
  ],
  output: 'static'
});