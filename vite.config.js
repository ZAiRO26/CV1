import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations for Netlify
    minify: 'terser',
    sourcemap: false,
    target: 'es2015',
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable compression and code splitting
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    // Optimize rollup options
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    },
    // Enable tree shaking
    treeshake: true
  },
  // Optimize dev server
  server: {
    port: 5173,
    host: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  }
})
