import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig , squooshImageService } from 'astro/config';
import icon from 'astro-icon';
import { register } from 'swiper/element/bundle';

import { downloadResearch } from './integrations/download-research';
import { minecoloniesSubmodule } from './integrations/submodule';

register();

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://minecolonies.com',
  image: {
    domains: ['minecraft.wiki'],
    service: squooshImageService(),
  },
  redirects: {
    '/source/[...slug]': '/wiki/[...slug]'
  },
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
    minecoloniesSubmodule(),
    downloadResearch()
  ]
});
