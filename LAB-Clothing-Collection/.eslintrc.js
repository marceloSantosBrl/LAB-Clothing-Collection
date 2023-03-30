module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base','airbnb-typescript/base'],
  parserOptions: {project: './tsconfig.json'},
  overrides: [
  ],
  rules: {
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off"
  }
}
