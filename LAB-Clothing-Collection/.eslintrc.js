module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base','airbnb-typescript/base'],
  parserOptions: {project: './tsconfig.json'},
  overrides: [
  ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module'
  // },
  rules: {
  }
}
