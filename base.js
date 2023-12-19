// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    'eslint:recommended',
  ],
  plugins: ['@stylistic'],
  env: {
    node: true,
    es6: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': 1,
    curly: [1, 'all'],
    eqeqeq: [1, 'always'],
    'line-comment-position': [1, 'above'],
    'no-console': [1, { allow: ['error'] }],
    'no-constant-binary-expression': 1,
    'no-constant-condition': [1, { checkLoops: false }],
    'no-debugger': 1,
    'no-else-return': 1,
    'no-inline-comments': 1,
    'no-multi-assign': 1,
    'no-multi-str': 1,
    'no-nested-ternary': 1,
    'no-return-assign': 1,
    'no-undef': 1,
    'no-unneeded-ternary': [1, { defaultAssignment: false }],
    'no-unreachable': 1,
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }],
    'no-useless-constructor': 1,
    'no-var': 1,
    'no-warning-comments': [
      1,
      { terms: ['fixme', 'todo', 'hack', 'review', 'xxx'] },
    ],
    'no-throw-literal': 1,
    'require-await': 1,
    'require-yield': 1,
    'prefer-const': 1,
    'prefer-template': 1,
    'no-implicit-coercion': 1,

    /**
     * ESLint Stylistic
     */
    '@stylistic/lines-between-class-members': [
      1,
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@stylistic/padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'if', next: 'if' },
    ],
    '@stylistic/spaced-comment': [1, 'always', { exceptions: ['-'] }],
  },
};
