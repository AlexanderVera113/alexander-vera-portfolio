import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cifrado: resolve(__dirname, '/cifrado/index.html'), // Agregamos el ./ por seguridad
        adminpro: resolve(__dirname, '/adminpro/index.html'),
        cybersensei: resolve(__dirname, '/cybersensei/index.html'),
      },
    },
  },
})