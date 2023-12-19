/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // https://github.com/wix-incubator/eslint-plugin-lodash/blob/master/src/index.js
    'plugin:lodash/recommended',
  ],
  plugins: ['lodash'],
  rules: {
    /**
     * eslint-plugin-lodash
     *
     * @see
     * https://github.com/wix/eslint-plugin-lodash
     */
    'lodash/chaining': 0,
    'lodash/prefer-constant': [1, false, true],
    'lodash/import-scope': [1, 'full'],
    'lodash/prefer-lodash-method': [
      1,
      {
        ignoreMethods: [
          'reverse',
          'replace',
          'split',
          'to(Lower|Upper)Case',
          'trim',
        ],
        ignoreObjects: ['Promise', '$'],
      },
    ],
  },
};
