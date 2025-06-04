import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

const __dirname = resolve();

export default defineConfig({
  plugins: [vue(), vuetify()],
  test: {
    include: ['src/**/*.test.*'],
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
  base: "./",
  build: {
    assetsInlineLimit: 0,
    assetsDir: "./",
    cssCodeSplit: false,
    manifest: true,
    outDir: "./build",
    rollupOptions: {
      input: { app: "./index.html" },
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0];
          if (fileName) {
            const extType = fileName.split(".").pop();
            if (extType === "png") {
              return "assets/images/[name]-[hash][extname]";
            }
            if (extType === "ico") {
              return "assets/[name][extname]";
            }
            return "[name]-[hash][extname]";
          }
          return "assets/others/[name]-[hash][extname]";
        },
        manualChunks: (fileName) => {
          const translationsFilesRegex =
            /src\/.*\/translations\/.*\.translations\.ts/;
          if (translationsFilesRegex.test(fileName)) {
            const language = fileName.split("translations/")[1].split("/")[0];
            return `translations-${language}`;
          }
          return "index";
        },
      },
    },
  },
});
