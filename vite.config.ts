import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

const __dirname = resolve();

export default defineConfig({
  plugins: [vue()],
  test: {
      include: ['src/**/*.test.ts?(x)'],
      exclude: [],
      reporters: [],
      outputFile: './report/index.html',
      environment: 'jsdom',
      passWithNoTests: true,
      coverage: {
        reportOnFailure: true,
        reportsDirectory: './report/coverage',
        enabled: false,
        provider: 'v8',
        reporter: 'html',
        include: ['src/**/*.{ts,tsx,js,jsx}'],
        exclude: [
          'src/**/*.type.ts',
          'src/**/*.interface.ts',
          'src/**/*.enum.ts',
          'src/**/*.test.*',
        ],
      },
    },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
