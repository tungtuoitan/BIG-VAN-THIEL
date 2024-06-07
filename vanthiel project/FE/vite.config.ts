import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@SRC': path.resolve(__dirname, 'src'),
      '@PUBLIC': path.resolve(__dirname, 'public'),
    },
  },
})
