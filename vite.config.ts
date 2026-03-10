import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Importamos el plugin de Tailwind v4
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Agregamos el plugin aquí
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cifrado: resolve(__dirname, 'cifrado.html'),
        adminpro: resolve(__dirname, 'adminpro.html'),
        cybersensei: resolve(__dirname, 'cybersensei.html'),
      },
    },
  },
})