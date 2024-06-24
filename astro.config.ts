import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig, squooshImageService } from 'astro/config';
import icon from 'astro-icon';

import { minecoloniesSubmodule } from './integrations/minecolonies';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://minecolonies.com',
  image: {
    domains: ['minecraft.wiki'],
    service: squooshImageService()
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
    minecoloniesSubmodule()
  ]
});
