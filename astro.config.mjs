import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // PRODUCTION URL: Critical for Sitemap generation
  site: 'https://jgcompliance.co.za',

  // BUILD SETTINGS: optimizing for Netlify hosting
  trailingSlash: 'never',
  build: {
    format: 'file'
  },

  integrations: [
    tailwind(),
    sitemap() // Active for SEO
  ],

  server: {
    host: '0.0.0.0'
  }
});
