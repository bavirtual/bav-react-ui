import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const usePolling = process.env.VITE_USE_POLLING === "true";

const uiSource = fileURLToPath(new URL("../../src/index.ts", import.meta.url));

const uiTsconfig = fileURLToPath(new URL("../../tsconfig.json", import.meta.url));
const uiSrcDir = fileURLToPath(new URL("../../src", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-themes", "@storybook/addon-docs"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  viteFinal: (config) => {
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
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: uiTsconfig,
      include: [`${uiSrcDir}/**/*.tsx`],
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !prop.parent.fileName.includes("node_modules") : true),
    },
  },
};

export default config;
