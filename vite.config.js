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
    minify: true,
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
      filename: 'proyect.js',
      // Modules to expose
      exposes: {
        './Microfrontend-vue2': './src/components/FormTest.vue',
        './remoteStore': './src/store/store.js',
      },
      shared: {
        vue: {},
        vuex: {},
      }
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
