import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import types from 'typescript-styled-plugin'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    // types()
  ]
})
