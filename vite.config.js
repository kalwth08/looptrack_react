import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 👇 Define la ruta base para servir la app en /looptrack_react/
  base: '/looptrack_react/',
})
