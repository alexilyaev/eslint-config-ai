'use strict';

module.exports = {
  plugins: ['jsdoc'],

  extends: ['plugin:jsdoc/recommended'],

  rules: {
    /**
     * Eslint-plugin-jsdoc (override on top of 'jsdoc/recommended').
     *
     * @see
     * https://github.com/gajus/eslint-plugin-jsdoc
     */
    'jsdoc/check-indentation': [1, { excludeTags: ['example', 'description'] }],
    'jsdoc/check-line-alignment': [1, 'always'],
    'jsdoc/check-syntax': 1,
    'jsdoc/match-description': 1,
    'jsdoc/no-bad-blocks': 1,
    'jsdoc/no-defaults': 1,
    'jsdoc/require-jsdoc': [
      1,
      { publicOnly: true, exemptEmptyFunctions: true },
    ],
  },
};
