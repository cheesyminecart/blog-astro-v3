import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://thespacer-blog.com",
  // replace this with your deployed domain
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  output: "server",
  adapter: vercel()
});