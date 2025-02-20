// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://NikoBorbe.github.io',
  base: '/Stem-Notes',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [svelte()],
})
