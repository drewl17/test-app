import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import babelParser from "@babel/eslint-parser";


export default [
  {
    files: ["**/*.js", "**/*.mjs", "src/*.js", "src/App.js", "src/**/*.js"],
      rules: {
          eqeqeq: "off",
          "no-unused-vars":"error",
          "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
          "indent": [1, 4],
      }
  },
  // {languageOptions: { globals: globals.browser }},
  {
    languageOptions: {
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false,
            babelOptions: {
              babelrc: false,
              configFile: false,
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-syntax-jsx"]
            }
        }
    }
},
  // pluginJs.configs.recommended,
  // pluginReactConfig,
];