module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", 'plugin:vue/vue3-recommended'],
  plugins: [],
  rules: {
    "func-call-spacing": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
  },
};
