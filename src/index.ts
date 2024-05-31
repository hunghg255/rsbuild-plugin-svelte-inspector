import type { RsbuildPlugin } from '@rsbuild/core';

import { setConfig } from '@rsbuild/shared';
import { startServer } from './server/server';
import { getRandomPort } from 'get-port-please';

export const pluginSvelteInspector = (options?: {
  position?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
}): RsbuildPlugin => {
  const position = {
    left: options?.position?.left || 'auto',
    right: options?.position?.right || '15px',
    bottom: options?.position?.bottom || 'auto',
    top: options?.position?.top || '15px',
  };

  return {
    name: 'rsbuild-plugin-svelte-inspector',
    async setup(api) {
      if (
        api.context.bundlerType === 'webpack' ||
        process.env.NODE_ENV !== 'development'
      ) {
        return;
      }

      const port = await getRandomPort();

      api.modifyRsbuildConfig((config) => {
        const tags: any = config?.html?.tags || [];

        setConfig(config, 'html.tags', [
          ...tags,
          {
            tag: 'script',
            head: true,
            attrs: {
              type: 'module',
              src: `http://localhost:${port}/virtual-svelte-inspector-path-load.js`,
              'data-svelte-inspector-position': `{left: ${position.left}; right: ${position.right}; top: ${position.top};bottom: ${position.bottom};}`,
            },
          },
        ]);
      });

      api.onAfterStartDevServer(() => {
        startServer(port, api?.context?.rootPath);
      });
    },
  };
};
