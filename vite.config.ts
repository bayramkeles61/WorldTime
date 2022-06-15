import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import UnoCSS from "unocss/vite"
import { presetUno, presetAttributify, presetIcons } from "unocss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(
      {
        reactivityTransform: true,
      }
    ),
    Components(),
    AutoImport({
      imports: [
        "vue",
        "vue/macros"
      ],
      dirs: [
        "./src/composables",
      ],
      vueTemplate: true,
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ]
})
