import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Simplified production optimizations
    minify: true,
    sourcemap: false,
    target: 'esnext',
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable compression
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  // Optimize dev server
  server: {
    port: 5173,
    host: true
  }
})
