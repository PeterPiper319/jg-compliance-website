// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap"; // <-- TEMPORARILY DISABLED FOR DEPLOYMENT

// https://astro.build/config
export default defineConfig({
  site: 'https://jgcompliance.co.za',
  
  trailingSlash: 'never',
  build: {
    format: 'file'
  },

  integrations: [
    tailwind(),
    // sitemap() // <-- TEMPORARILY DISABLED FOR DEPLOYMENT
  ],
  server: {
    host: '0.0.0.0'
  }
});
