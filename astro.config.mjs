import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jgcompliance.co.za', // <--- THIS LINE FIXES THE BUILD ERROR
  integrations: [tailwind(), sitemap()]
});
