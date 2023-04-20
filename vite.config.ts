import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    minify: 'esbuild',
  },
});
