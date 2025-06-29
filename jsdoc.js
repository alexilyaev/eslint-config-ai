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
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1, endLines: 0 }],
    'jsdoc/require-jsdoc': [
      'warn',
      { publicOnly: true, exemptEmptyFunctions: true },
    ],
    // Add rules that are not present or `off` in `jsdoc/recommended`
    'jsdoc/check-line-alignment': [
      'warn',
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
    'jsdoc/check-syntax': 'warn',
    'jsdoc/no-bad-blocks': 'warn',
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
