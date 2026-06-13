import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lokeshgundrathi/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
