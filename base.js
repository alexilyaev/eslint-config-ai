'use strict';

const prettierConfig = require('./prettier.config');

// Support custom settings when running ESLint from an npm script
const npmLintMode = ['base-eslint', 'eslint:base'].includes(
  process.env.npm_lifecycle_event
);

module.exports = {
  extends: ['eslint:recommended', 'prettier'],

  env: {
    es6: true,
    node: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },

  rules: {
    // Disabled, May conflict with Prettier
    quotes: [0, 'single', { allowTemplateLiterals: true }],
    'arrow-parens': [0, 'as-needed'],
    'arrow-spacing': 0,
    'brace-style': [0, '1tbs', { allowSingleLine: false }],
    'eol-last': 0,
    indent: [0, 2, { SwitchCase: 1 }],
    'key-spacing': [0, { mode: 'strict' }],
    'keyword-spacing': 0,
    'no-extra-semi': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-multi-spaces': [
      0,
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true,
          ImportSpecifier: true,
          AssignmentExpression: true,
          ClassProperty: true,
        },
      },
    ],
    'no-multiple-empty-lines': [0, { max: 1 }],
    'no-trailing-spaces': 0,
    'object-curly-spacing': [0, 'always'],
    'operator-linebreak': [
      0,
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    semi: [0, 'always'],
    'semi-spacing': [0, { before: false, after: true }],
    'semi-style': [0, 'last'],
    'space-before-blocks': [0, 'always'],
    'switch-colon-spacing': [0, { before: false, after: true }],
    'func-call-spacing': [0, 'never'],
    'function-paren-newline': [0, 'multiline'],
    'prefer-arrow-callback': 0,
    'linebreak-style': [0, 'unix'],

    // Special rules on top of Prettier changes
    'max-len': [
      1,
      {
        code: prettierConfig.printWidth,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // Warning
    'array-callback-return': 1,
    curly: [1, 'all'],
    eqeqeq: [1, 'always'],
    'lines-between-class-members': [
      1,
      'always',
      { exceptAfterSingleLine: true },
    ],
    'line-comment-position': [1, 'above'],
    'no-console': npmLintMode ? [1, { allow: ['error'] }] : 0,
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
    'no-return-await': 1,
    'no-throw-literal': 1,
    'require-await': 1,
    'require-yield': 1,
    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'if', next: 'if' },
    ],
    'prefer-const': 1,
    'prefer-template': 1,
    'spaced-comment': [1, 'always', { exceptions: ['-'] }],
    'no-implicit-coercion': 1,

    strict: [1, 'global'],
  },
};
