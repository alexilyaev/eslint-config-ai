// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    /**
     * eslint-plugin-jest
     *
     * @see
     * https://github.com/jest-community/eslint-plugin-jest
     */
    'jest/consistent-test-it': 1,
    'jest/lowercase-name': 0,
    'jest/no-hooks': 0,
    'jest/no-large-snapshots': 1,
    'jest/no-test-prefixes': 1,
    'jest/prefer-expect-assertions': 0,
    'jest/valid-expect-in-promise': 1,
  },
};
