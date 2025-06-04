import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    },
    // Optimize build size
    minify: 'terser',
    cssMinify: true,
    // Enable source maps for better debugging
    sourcemap: false
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // Preload optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', '@gsap/react']
  }
})
