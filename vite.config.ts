import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import checker from 'vite-plugin-checker';
import { peerDependencies, dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // will generate much smaller output in library mode
    }),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src', 'index.ts'),
      fileName: (ext) => `index.${ext}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: 'esnext',
    sourcemap: true,
  },
});
