// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jgcompliance.co.za',
  
  // CRITICAL FIX: Explicitly define URL structure for Sitemap generation
  trailingSlash: 'never',
  build: {
    format: 'file' // Generates contact.html instead of contact/index.html
  },

  integrations: [
    tailwind(),
    sitemap()
  ],
  server: {
    host: '0.0.0.0'
  }
});
