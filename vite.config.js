import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await'

const APPLICATION_PORT = 5005

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 40960,
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
  server: {
    port: APPLICATION_PORT
  },
  preview: {
    port: APPLICATION_PORT
  },
  plugins: [
    vue2(),
    federation({
      name: 'Microfrontend-vue2',
      filename: 'Microfrontend-vue2.js',
      // Modules to expose
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue'
      },
      shared: {
        vue: {},
        vuex: {},
      }
    }),
    topLevelAwait({
      promiseExportName: "__tla",
      // Corregir la función de generación de nombres de importación
      promiseImportName: i => `__tla${i}`
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
