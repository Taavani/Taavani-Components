/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  features: {
    experimentalDocgenServer: true
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-styling-webpack",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  }
};
export default config;
