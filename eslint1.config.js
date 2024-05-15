// import babelParser from "@babel/eslint-parser";
const babelParser = require("@babel/eslint-parser");

module.exports = [
    {
        files: ["**/*.js", "**/*.mjs", "src/*.js", "src/index.js"],
        rules: {
            "semi": "error",
            "prefer-const": "error",
            "indent": [1, 4],
            "no-unused-vars": "error"
        }
    },{
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
    }
];