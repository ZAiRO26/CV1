import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enhanced production optimizations
    minify: 'terser',
    sourcemap: false,
    target: 'esnext',
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
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
