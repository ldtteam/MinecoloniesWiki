import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import { downloadResearch } from './plugins/download-research';

// https://astro.build/config
export default defineConfig({
  integrations: [
    downloadResearch({
      runOnReload: true,
      cacheValidityTime: 168
    }),
    react(),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        'fa6-solid': ['*'],
        'fa6-regular': ['*'],
        'fa6-brands': ['*']
      }
    }),
    markdoc()
  ],
  output: 'static'
});
