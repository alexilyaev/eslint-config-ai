// @ts-check

/**
 * This file is only used to validate no rules are conflicting with Prettier
 * See `npm run lint-eslint-config-prettier`
 */

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  root: true,
  extends: ['ai/all'],
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    // ...
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // ESLint configs can't be ESM modules
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
