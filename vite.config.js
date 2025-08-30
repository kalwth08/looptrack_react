import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Carpeta donde se generará el build de producción
    outDir: 'looptrack_react',
    // Limpia la carpeta antes de cada build
    emptyOutDir: true,
  },
})
