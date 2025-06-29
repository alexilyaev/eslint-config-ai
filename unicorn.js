// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/configs/recommended.js
    'plugin:unicorn/recommended',
  ],
  plugins: ['unicorn'],
  rules: {
    /**
     * eslint-plugin-unicorn (override on top of 'recommended')
     *
     * @see
     * https://github.com/sindresorhus/eslint-plugin-unicorn
     */
    'unicorn/explicit-length-check': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
    // Each project should define it's own filename casing for different folders
    'unicorn/filename-case': 'off',
    // Turn back on as it is turned off in `unicorn/recommended`
    'no-nested-ternary': 'warn',
    // This rule allow single line nested ternary, which we don't like
    'unicorn/no-nested-ternary': 'off',
    // Too many false positives
    'unicorn/no-array-method-this-argument': 'off',
    // Doesn't play nice with TypeScript in certain cases
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-switch': 'off',
  },
};
