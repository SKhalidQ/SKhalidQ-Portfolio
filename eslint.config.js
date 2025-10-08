// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "semi": [
          "error",
          "always"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "template-curly-spacing": [
          "error",
          "never"
        ],
        "object-curly-spacing": [
          "error",
          "always"
        ],
        "no-unreachable": [
          "error"
        ],
        "@typescript-eslint/explicit-function-return-type": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
          "error", { "max": 1 }
        ],
        "no-trailing-spaces": "error"
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
