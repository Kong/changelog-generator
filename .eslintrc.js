const { ERROR, OFF } = require('eslint-config-helpers');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'simple-import-sort',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF('not compatable with the version of node this project uses'),
      },
    },
  ],
  rules: {
    'simple-import-sort/imports': ERROR,

    '@typescript-eslint/array-type': [ERROR, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/brace-style': [ERROR, '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'interface'],
    '@typescript-eslint/keyword-spacing': ERROR,
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/no-empty-interface': [ERROR, { 'allowSingleExtends': true }],
    '@typescript-eslint/no-namespace': [ERROR, { allowDeclarations: true }],
    '@typescript-eslint/no-redeclare': ERROR,
    '@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/space-infix-ops': ERROR,
    '@typescript-eslint/semi': [ERROR, 'always'],
    '@typescript-eslint/quotes': [ERROR, 'single', { avoidEscape: true }],

  }
};
