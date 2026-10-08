import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arceconomy.top',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
