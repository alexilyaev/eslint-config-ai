// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
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
    'unicorn/explicit-length-check': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/consistent-function-scoping': 0,
    // Each project should define it's own filename casing for different folders
    'unicorn/filename-case': 0,
    // Turn back on as it is turned off in `unicorn/recommended`
    'no-nested-ternary': 1,
    // This rule allow single line nested ternary, which we don't like
    'unicorn/no-nested-ternary': 0,
    // Too many false positives
    'unicorn/no-array-method-this-argument': 0,
  },
};
