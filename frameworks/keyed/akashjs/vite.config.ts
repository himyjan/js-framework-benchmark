import { defineConfig } from 'vite';
import akash from '@akashjs/vite-plugin';

export default defineConfig({
  plugins: [akash()],
  build: {
    outDir: 'dist',
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
