import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"; // Activated

// https://astro.build/config
export default defineConfig({
  site: 'https://jgcompliance.co.za', 
  integrations: [
    tailwind(),
    sitemap() // Activated
  ],
  server: {
    host: '0.0.0.0'
  }
});
