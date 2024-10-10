// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/index.js
    'plugin:jsdoc/recommended',
  ],
  plugins: ['jsdoc'],
  settings: {
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
    /**
     * eslint-plugin-jsdoc (override on top of 'jsdoc/recommended').
     *
     * @see
     * https://github.com/gajus/eslint-plugin-jsdoc
     */
    'jsdoc/tag-lines': [1, 'any', { startLines: 1, endLines: 0 }],
    'jsdoc/require-jsdoc': [
      1,
      { publicOnly: true, exemptEmptyFunctions: true },
    ],
    // Add rules that are not present or `off` in `jsdoc/recommended`
    'jsdoc/check-line-alignment': [
      1,
      'always',
      {
        preserveMainDescriptionPostDelimiter: true,
        tags: [
          'param',
          'arg',
          'argument',
          'property',
          'prop',
          // Disabling these as it doesn't look good
          // 'returns',
          // 'return',
        ],
      },
    ],
    'jsdoc/check-syntax': 1,
    'jsdoc/no-bad-blocks': 1,
  },
  overrides: [
    {
      files: ['*.{ts,mts,tsx}'],
      extends: [
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/index.js
        'plugin:jsdoc/recommended-typescript',
      ],
    },
  ],
};
