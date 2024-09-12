import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config = {
      ...config,
      resolve: {
        ...config?.resolve,
        alias: {
          ...config?.resolve?.alias,
          "@": `${process.cwd()}/src`,
        },
      },
    };

    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
