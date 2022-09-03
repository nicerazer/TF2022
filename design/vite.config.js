import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig'
import FullReload from 'vite-plugin-full-reload'
import Twig from 'twig';

export default defineConfig({
  // ...
  plugins: [
    twig({
      globals: {
        "site": {
          "name": "development",
          "scripts": [
            {
              "src": "/123jquery.123.com"
            },
            {
              "src": "js1"
            },
            {
              "src": "notjque"
            }
          ]
        }
      }
    }),
    FullReload(['templates/**/*.{twig,html}', 'pages/**/*.{twig,html}']),
  ]
})