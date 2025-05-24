import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // This ensures Vite processes your Tailwind CSS file
      // (no extra config needed for plain CSS, but this can help force Vite to pick it up)
    },
  },
});
