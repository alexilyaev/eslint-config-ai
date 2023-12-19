// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/lib/configs/recommended.js
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['eslint-comments'],
  rules: {
    /**
     * eslint-plugin-eslint-comments
     *
     * @see
     * https://github.com/mysticatea/eslint-plugin-eslint-comments
     */
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-use': ['warn', { allow: ['eslint-disable-next-line'] }],
    'eslint-comments/no-restricted-disable': [
      'warn',
      'eslint-comments/*',
      '@typescript-eslint/ban*',
    ],
  },
};
