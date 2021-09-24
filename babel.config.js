const devPresets = ["@vue/babel-preset-app"];
const buildPresets = [
  [
    "@babel/preset-env",
    // Config for @babel/preset-env
    {
      // Example: Always transpile optional chaining/nullish coalescing
      // include: [
      //   /(optional-chaining|nullish-coalescing)/
      // ],
    }
  ]
];

const buildPlugins = [
  // ["@babel/plugin-proposal-class-properties", { loose: false }],
  // ["@babel/plugin-proposal-private-methods", { loose: false }],
  ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
];

module.exports = {
  presets: process.env.NODE_ENV === "development" ? devPresets : buildPresets,
  plugins: buildPlugins,
  compact: false
};
