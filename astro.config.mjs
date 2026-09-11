// @ts-check
import "dotenv/config";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  base: process.env.BASE_URL || "/",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
