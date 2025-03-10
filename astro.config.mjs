// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@utils': path.resolve('./src/utils')
      }
    }
  },

  integrations: [mdx()],
  site: "https:example.com"
});