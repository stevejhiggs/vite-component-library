import { resolve } from 'path';
import { defineConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import checker from 'vite-plugin-checker';
import { peerDependencies, dependencies } from './package.json';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      fileName: (ext) => `index.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies || {}),
        ...Object.keys(dependencies || {}),
        'react',
        'react/jsx-runtime',
      ],
    },
    target: 'esnext',
    sourcemap: true,
    copyPublicDir: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
} as VitestConfigExport);
