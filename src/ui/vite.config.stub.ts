import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig, normalizePath } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default function (ROOT: string, DIR: string) {
  const LIBRARY_NAME = DIR.replace(/\/$/, "").split("/").pop()

  return defineConfig({
    root: ROOT,
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      cssInjectedByJsPlugin(),
      viteStaticCopy({
        targets: [
          {
            // Copy the build output into Node-RED's /resources folder
            src: normalizePath(resolve(ROOT,`./dist/ui/${LIBRARY_NAME}/${LIBRARY_NAME}.umd.js`)),
            dest: normalizePath(resolve(ROOT, './resources'))
          }
        ]
      })
    ],
    build: {
      // Generate a source map in dev mode
      sourcemap: process.env.NODE_ENV === 'development',

      // Configure build as a UMD library
      lib: {
        entry: resolve(DIR, './index.ts'),
        name: LIBRARY_NAME,
        formats: ['umd'],
        fileName: (format, entryName) => `${LIBRARY_NAME}.${format}.js`
      },

      // This is the target location for the build output
      outDir: resolve(ROOT, `./dist/ui/${LIBRARY_NAME}`),

      // Declare dependencies that shouldn't be bundled into the library
      rollupOptions: {
        // Don't rollup the Vue dependency into the build
        external: ['vue', 'vuex'],
        output: {
          // Provide global variables to use in the UMD build
          globals: {
            vue: 'Vue',
            vuex: 'vuex'
          }
        }
      }
    }
  })
}
