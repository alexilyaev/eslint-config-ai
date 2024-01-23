// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // https://github.com/import-js/eslint-plugin-import/tree/main/config
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  /**
   * NOTE:
   * Add this if you're using Webpack aliases...
   */
  // Specific settings used by different plugins
  // settings: {
  //   // Support custom aliases
  //   // https://github.com/benmosher/eslint-plugin-import#resolvers
  //   'import/resolver': {
  //     // https://www.npmjs.com/package/eslint-import-resolver-node
  //     node: {
  //       moduleDirectory: ['node_modules', __dirname, 'app'],
  //     },
  //   },
  //   // Or...
  //   'import/resolver': {
  //     // https://github.com/import-js/eslint-import-resolver-typescript
  //     typescript: {
  //       alwaysTryTypes: true,
  //       project: `${__dirname}/tsconfig.json`,
  //     },
  //   },
  // },
  rules: {
    /**
     * eslint-plugin-import
     *
     * @see
     * https://github.com/benmosher/eslint-plugin-import
     */

    // Static analysis
    'import/no-unresolved': 1,
    'import/named': 1,
    'import/default': 1,
    'import/namespace': 1,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 1,
    'import/no-dynamic-require': 1,
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 1,
    'import/no-self-import': 1,
    'import/no-cycle': 1,
    'import/no-useless-path-segments': 1,
    'import/no-relative-parent-imports': 0,

    // Helpful warnings
    'import/export': 1,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,
    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': [
      1,
      { packageDir: '.', devDependencies: false },
    ],
    'import/no-mutable-exports': 1,
    'import/no-unused-modules': 0,

    // Module systems
    'import/unambiguous': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 1,
    'import/no-nodejs-modules': 0,

    // Style guide
    'import/first': 1,
    'import/exports-last': 0,
    'import/no-duplicates': 1,
    'import/no-namespace': 1,
    'import/extensions': 0,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        // Force a specific order for internal imports
        pathGroups: [
          'lib',
          'stores',
          'styles',
          'hooks',
          'public',
          'components',
        ].map((identifier) => ({
          pattern: `${identifier}/**`,
          group: 'internal',
          position: 'after',
        })),
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 1,
    'import/no-named-default': 1,
    'import/no-default-export': 1,
    'import/no-named-export': 0,
    'import/no-anonymous-default-export': 1,
    'import/group-exports': 0,
    'import/dynamic-import-chunkname': 0,
  },
};
