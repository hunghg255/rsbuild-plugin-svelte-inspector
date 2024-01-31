import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import { pluginSvelteInspector } from 'rsbuild-plugin-svelte-inspector';

export default defineConfig({
  plugins: [
    pluginSvelte(),
    pluginSvelteInspector({
      port: 3075,
    }),
  ],
});
