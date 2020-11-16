'use strict';

module.exports = {
  plugins: ['unicorn'],

  extends: ['plugin:unicorn/recommended', 'prettier/unicorn'],

  rules: {
    /**
     * eslint-plugin-unicorn (override on top of 'recommended')
     *
     * @see
     * https://github.com/sindresorhus/eslint-plugin-unicorn
     */
    'unicorn/explicit-length-check': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/prefer-node-append': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/no-fn-reference-in-iterator': 1,
    'unicorn/no-unsafe-regex': 1,
    'unicorn/no-unused-properties': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-reduce': 0,
  },
};
