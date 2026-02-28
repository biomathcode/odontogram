import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';

// Correct way to get the directory path in ES Modules
const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // --- BUILD CONFIG (FOR NPM) ---
  build: {
    lib: {
      // Points to your main entry that exports og-tooth and og-dontogram
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'OgOdontogram',
      fileName: (format) => `og-odontogram.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // Don't bundle Lit into your library; let the consumer provide it
      external: [/^lit/],
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },

  // --- PLUGINS ---
  plugins: [
    // Generates .d.ts files so your NPM users get TypeScript support
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts']
    })
  ],

  // --- TEST CONFIG (FOR VITEST/STORYBOOK) ---
  test: {
    workspace: [
      {
        extends: true,
        plugins: [
          // Use the 'dirname' variable instead of '__dirname'
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: [path.resolve(dirname, '.storybook/vitest.setup.ts')],
        },
      },
    ],
  },
});