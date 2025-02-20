// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://NikoBorbe.github.io',
  base: '/github-pages',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [svelte()],
})
