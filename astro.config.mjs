// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // FIX: This URL is required for the sitemap to build.
  // Once you connect your custom domain, this will be correct.
  // If you are just testing, you can use a placeholder like 'https://example.com'
  // but it's better to put your intended final domain here.
  site: 'https://jgcompliance.co.za', 
  
  integrations: [tailwind(), sitemap()]
});
