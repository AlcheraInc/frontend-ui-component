// rollup.config.js
import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import image from "@rollup/plugin-image";
import sass from "rollup-plugin-sass";
import scss from "rollup-plugin-scss";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import minimist from "minimist";

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter(entry => entry && entry.substring(0, 2) !== "ie");

// Extract babel preset-env config, to combine with esbrowserslist
const babelPresetEnvConfig = require("../babel.config").presets.filter(
  entry => entry[0] === "@babel/preset-env"
)[0][1];

// const babelPluginEnvConfig = require("../babel.config").plugins.filter(
//   entry => {
//     console.log(entry);
//     entry[0] === "@babel/plugin-proposal-class-properties" ||
//       entry[0] === "@babel/plugin-proposal-private-methods" ||
//       entry[0] === "@babel/plugin-proposal-private-property-in-object";
//   }
// );

// console.log(babelPresetEnvConfig, "preset");
// console.log(babelPluginEnvConfig, "plugin");

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, "..");

const baseConfig = {
  input: "src/entry.js",
  plugins: {
    preVue: [
      alias({
        // entries: {
        //   ["@"]: path.resolve(projectRoot, "src"),
        //   ["@@"]: path.resolve(projectRoot, "src/stories")
        // }
        // "@": path.resolve(__dirname, "../src"),
        // "@@": path.resolve(__dirname, "../src/stories")
        entries: [
          {
            find: "@",
            replacement: `${path.resolve(projectRoot, "src")}`
          }
          // {
          //   find: "@@",
          //   replacement: `${path.resolve(projectRoot, "src/stories")}`
          // }
        ]
      })
    ],
    replace: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true
    },
    vue: {
      css: true,
      template: {
        isProduction: true
      }
    },
    postVue: [
      resolve({
        browser: true,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"]
      }),
      commonjs()
    ],
    babel: {
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      babelHelpers: "bundled",
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { loose: false }]
      ]
    }
  }
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  "vue",
  "vuetify",
  "moment",
  "exceljs",
  "file-saver",
  "material-design-icons-iconfont"
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: "Vue",
  moment: "moment",
  "file-saver": "FileSaver",
  exceljs: "Excel"
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    input: "src/entry.esm.js",
    external,
    output: {
      file: "dist/alchera-ui-component.esm.js",
      format: "esm",
      exports: "named"
    },
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      image(),
      sass(baseConfig),
      scss(baseConfig),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            "@babel/preset-env",
            {
              ...babelPresetEnvConfig,
              targets: esbrowserslist
            }
          ]
        ]
      })
    ],
    onwarn: function(warning, warner) {
      // if circular dependency warning
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        // if coming from a third-party
        if (warning.importer && warning.importer.startsWith("node_modules/")) {
          // ignore warning
          return;
        }
      }
      // Use default for everything else
      warner(warning);
    }
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/alchera-ui-component.ssr.js",
      format: "cjs",
      name: "AlcheraUIComponent",
      exports: "auto",
      globals
    },
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      image(),
      sass(baseConfig),
      scss(baseConfig),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true
        }
      }),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel)
    ],
    onwarn: function(warning, warner) {
      // if circular dependency warning
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        // if coming from a third-party
        if (warning.importer && warning.importer.startsWith("node_modules/")) {
          // ignore warning
          return;
        }
      }
      // Use default for everything else
      warner(warning);
    }
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === "iife") {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/alchera-ui-component.min.js",
      format: "iife",
      name: "AlcheraUIComponent",
      exports: "auto",
      globals
    },
    plugins: [
      nodeResolve({ preferBuiltins: false }),
      image(),
      sass(baseConfig),
      scss(baseConfig),
      commonjs(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      terser({
        output: {
          ecma: 5
        }
      })
    ],
    onwarn: function(warning, warner) {
      // if circular dependency warning
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        // if coming from a third-party
        if (warning.importer && warning.importer.startsWith("node_modules/")) {
          // ignore warning
          return;
        }
      }
      // Use default for everything else
      warner(warning);
    }
  };
  buildFormats.push(unpkgConfig);
}

// onwarn: managing wranings | 3rd party libraries circular dependencies warning handler

// Export config
export default buildFormats;
