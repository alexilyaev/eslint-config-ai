// @ts-check

/** @type {import('eslint').Linter.Config} */
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
    'jest/consistent-test-it': 'warn',
    'jest/lowercase-name': 'off',
    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': 'warn',
    'jest/no-test-prefixes': 'warn',
    'jest/prefer-expect-assertions': 'off',
    'jest/valid-expect-in-promise': 'warn',
  },
};
