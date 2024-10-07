// @ts-check

/**
 * @type {import("eslint").Linter.Config}
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
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': 'warn',
    curly: ['warn', 'all'],
    eqeqeq: ['warn', 'always'],
    'line-comment-position': ['warn', 'above'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-constant-binary-expression': 'warn',
    'no-constant-condition': ['warn', { checkLoops: false }],
    'no-debugger': 'warn',
    'no-else-return': 'warn',
    'no-inline-comments': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-str': 'warn',
    'no-nested-ternary': 'warn',
    'no-return-assign': 'warn',
    'no-undef': 'warn',
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    'no-unreachable': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'no-useless-constructor': 'warn',
    'no-var': 'warn',
    'no-warning-comments': [
      'warn',
      { terms: ['fixme', 'todo', 'hack', 'review', 'xxx'] },
    ],
    'no-throw-literal': 'warn',
    'require-await': 'warn',
    'require-yield': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'no-implicit-coercion': 'warn',

    /**
     * ESLint Stylistic
     */
    '@stylistic/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@stylistic/padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'if', next: 'if' },
    ],
    '@stylistic/spaced-comment': ['warn', 'always', { exceptions: ['-'] }],
  },
  reportUnusedDisableDirectives: true,
};
