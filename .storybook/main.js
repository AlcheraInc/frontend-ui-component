const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../aiirscan-client/**/*.stories.mdx",
    "../aiirscan-client/**/*.stories.@(js|jsx|ts|tsx)",
    "../base-components/**/*.stories.mdx",
    "../base-components/**/*.stories.@(js|jsx|ts|tsx)",
    "../shimizu-client/**/*.stories.mdx",
    "../shimizu-client/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "~storybook": path.resolve(__dirname),
          "@": path.resolve(__dirname, "../stories"),
          "@@": path.resolve(__dirname, "../src"),
          ".storybook": path.resolve(__dirname, "../.storybook"),
          vue: "vue/dist/vue.js",
          vue$: "vue/dist/vue.esm.js"
        }
      }
    });
    // return the updated Storybook configuration
    return config;
  }
};
