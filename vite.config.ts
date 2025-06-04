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
    // Enable source maps for better debugging
    sourcemap: false
  },
  // Preload optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', '@gsap/react']
  }
})
