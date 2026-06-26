import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['gsap', 'lenis'],
          'vendor-d3':     ['d3', 'topojson-client'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
