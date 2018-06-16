'use strict';

module.exports = {
  plugins: ['lodash'],

  extends: ['plugin:lodash/recommended'],

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
    // eslint-plugin-lodash
    'lodash/chaining': 0,
    'lodash/prefer-constant': [1, false, true],
    'lodash/import-scope': [1, 'full'],
    'lodash/prefer-lodash-method': [
      1,
      {
        ignoreMethods: ['reverse', 'replace', 'split', 'to(Lower|Upper)Case', 'trim'],
        ignoreObjects: ['Promise', '$']
      }
    ]
  }
};
