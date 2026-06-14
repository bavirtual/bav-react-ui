import type { StorybookConfig } from "@storybook/react-vite";

const usePolling = process.env.VITE_USE_POLLING === "true";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  viteFinal: (config) => ({
    ...config,
    // Bind to all interfaces (and poll-watch) so it works inside Docker.
    server: {
      ...config.server,
      host: true,
      ...(usePolling ? { watch: { usePolling: true, interval: 100 } } : {}),
    }
  }),
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
