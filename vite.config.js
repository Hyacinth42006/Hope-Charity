// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'about_us.html'),
        popUp: resolve(__dirname, 'pop_up.html'),
        header: resolve(__dirname, 'header.html'),
        footer: resolve(__dirname, 'footer.html'),
      },
    },
  },
})
