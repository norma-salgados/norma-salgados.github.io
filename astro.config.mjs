// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages (repositório norma-salgados.github.io → servido na raiz, sem `base`)
  site: 'https://norma-salgados.github.io',

  i18n: {
    locales: ['pt', 'ja', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', ja: 'ja', en: 'en' },
      },
    }),
  ],
});
