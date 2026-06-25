import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const usePolling = process.env.VITE_USE_POLLING === "true";

const uiSource = fileURLToPath(new URL("../../src/index.ts", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  viteFinal: (config) => {
    // Vite types `resolve.alias` as either an array or a record; normalize to
    // the array form so we can append our alias without dropping any existing.
    const existingAlias = config.resolve?.alias;
    const aliasList = Array.isArray(existingAlias)
      ? [...existingAlias]
      : Object.entries(existingAlias ?? {}).map(([find, replacement]) => ({ find, replacement }));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: [...aliasList, { find: /^bav-react-ui$/, replacement: uiSource }],
      },
      server: {
        ...config.server,
        host: true,
        ...(usePolling ? { watch: { usePolling: true, interval: 100 } } : {}),
      },
    };
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !prop.parent.fileName.includes("node_modules") : true),
    },
  },
};

export default config;
