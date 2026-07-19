// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your real domain before launch (used for canonical URLs + sitemap).
export default defineConfig({
  site: 'https://tennisterminal.com',
  integrations: [sitemap()],
});
