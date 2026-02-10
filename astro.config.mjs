import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap"; // <-- COMMENTED OUT

// https://astro.build/config
export default defineConfig({
  site: 'https://jgcompliance.co.za', 
  integrations: [
    tailwind() 
    // sitemap() <-- REMOVED TEMPORARILY
  ]
});
