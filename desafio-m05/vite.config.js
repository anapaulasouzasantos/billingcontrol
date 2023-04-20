import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Atualiza a página automaticamente quando arquivos dentro da pasta 'src' são modificados
      include: 'src/**'
    }
  }
})
