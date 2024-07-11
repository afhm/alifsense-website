import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
// import solidJs from "@astrojs/solid-js";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
const tina = ({ directiveName = 'tina' } = {}) => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({ addClientDirective, opts }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: './client-directives/tina.mjs',
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://alifsense.com',
  integrations: [
    robotsTxt(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    tina(),
  ],
  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['assets.tina.io'],
  },
});
