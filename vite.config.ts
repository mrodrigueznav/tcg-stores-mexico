import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tcg-stores-mexico/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});