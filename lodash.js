// @ts-check

/** @type {import('eslint').Linter.Config} */
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
    'lodash/chaining': 'off',
    'lodash/prefer-constant': ['warn', false, true],
    'lodash/import-scope': ['warn', 'full'],
    'lodash/prefer-lodash-method': [
      'warn',
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
