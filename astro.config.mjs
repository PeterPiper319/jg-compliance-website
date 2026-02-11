// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://jgcompliance.co.za', // Must match your production URL exactly
  
  trailingSlash: 'never',
  build: {
    format: 'file'
  },

  integrations: [
    tailwind(),
    sitemap({
      // FILTER LOGIC: Prevent the generator from crashing on non-page assets
      filter: (page) => page !== 'https://jgcompliance.co.za/google-analytics',
      
      // CONFIGURATION: Explicitly define entry points if auto-detection fails
      entryLimit: 10000,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  server: {
    host: '0.0.0.0'
  }
});
