const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {
    // so I can import { storyFactory } from '~storybook/util/helpers'
    config.resolve.alias["~storybook"] = path.resolve(__dirname);
    // the @ alias points to the `src/` directory, a common alias
    // used in the Vue community
    config.resolve.alias["@"] = path.resolve(__dirname, "..", "stories");

    // return the updated Storybook configuration
    return config;
  },
};
