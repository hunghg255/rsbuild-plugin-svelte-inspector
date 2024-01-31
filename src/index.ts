import type { RsbuildPlugin } from '@rsbuild/core';

import { setConfig } from '@rsbuild/shared';
import { startServer } from './server/server';

export const pluginSvelteInspector = (options?: {
  port?: number;
  position?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
}): RsbuildPlugin => {
  const port = options?.port || 3070;
  const position = {
    left: options?.position?.left || 'auto',
    right: options?.position?.right || '15px',
    bottom: options?.position?.bottom || 'auto',
    top: options?.position?.top || '15px',
  };

  return {
    name: 'rsbuild-plugin-svelte-inspector',
    setup(api) {
      if (
        api.context.bundlerType === 'webpack' ||
        process.env.NODE_ENV !== 'development'
      ) {
        return;
      }

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
