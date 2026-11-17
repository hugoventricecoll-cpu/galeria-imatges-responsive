import { defineConfig } from 'vite'

export default defineConfig({
  // Rutes relatives perquè la build funcioni també en un subdirectori
  // (per exemple, GitHub Pages).
  base: './',
})
