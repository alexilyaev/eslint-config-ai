'use strict';

module.exports = {
  plugins: ['jest'],

  extends: ['plugin:jest/recommended'],

  env: {
    es6: true
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'script'
  },

  rules: {
    // eslint-plugin-jest
    'jest/consistent-test-it': 1,
    'jest/lowercase-name': 0,
    'jest/no-hooks': 0,
    'jest/no-large-snapshots': 1,
    'jest/no-test-prefixes': 1,
    'jest/prefer-to-be-null': 1,
    'jest/prefer-to-be-undefined': 1,
    'jest/prefer-expect-assertions': 0,
    'jest/valid-describe': 1,
    'jest/valid-expect-in-promise': 1
  },

  // Override config (only applied to files that match the given globs)
  overrides: [
    // Test files
    {
      files: ['**/*.(spec|test).js'],
      env: {
        jest: true
      }
    }
  ]
};
