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
          "name": "notdevelopment",
          "menu": [
            {"name": "subscriptions", "link": "/subscriptions"},
            {"name": "refill", "link": "/refill"},
            {"name": "account", "link": "/account"},
            {"name": "orders", "link": "/orders"},
            {"name": "neworder", "link": "/neworder"}
          ],
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