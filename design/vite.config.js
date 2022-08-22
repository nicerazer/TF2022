import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  // ...
  plugins: [
    twig(),
    FullReload(['templates/**/*.{twig,html}', 'pages/**/*.{twig,html}']),
  ]
})