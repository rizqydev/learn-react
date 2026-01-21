import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "./src/index.html",
        note: "./src/note-app.html",
        profile: "./src/profile.html"
      }
    }
  }
})
