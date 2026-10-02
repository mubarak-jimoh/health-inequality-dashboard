import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths, so the build works when GitHub Pages serves it from a sub-folder
  base: './',
  plugins: [react()],
})
