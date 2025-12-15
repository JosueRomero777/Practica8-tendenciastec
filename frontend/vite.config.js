import { defineConfig } from 'vite'

// Vite config: proxy API requests to backend container to avoid mixed-content
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://backend:4000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
})
