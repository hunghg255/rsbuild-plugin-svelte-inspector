import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import { pluginSvelteInspector } from '../src';

export default defineConfig({
  plugins: [
    pluginSvelte(),
    pluginSvelteInspector({
      port: 3075,
    }),
  ],
});
