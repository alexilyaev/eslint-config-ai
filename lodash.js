'use strict';

module.exports = {
  plugins: ['lodash'],

  extends: ['plugin:lodash/recommended'],

  rules: {
    // eslint-plugin-lodash
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
