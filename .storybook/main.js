// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   addons: ["@storybook/addon-links", "@storybook/addon-essentials"]
// };
const path = require("path");

module.exports = {
  stories: [
    "../src/stories/Introduction.stories.mdx",
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/aiirscan-client/**/*.stories.mdx",
    "../src/aiirscan-client/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/base-components/**/*.stories.mdx",
    "../src/base-components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/composite-components/**/*.stories.mdx",
    "../src/composite-components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/shimizu-client/**/*.stories.mdx",
    "../src/shimizu-client/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "~storybook": path.resolve(__dirname),
          "@": path.resolve(__dirname, "../src"),
          "@@": path.resolve(__dirname, "../src/stories"),
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
