// @ts-check

const unassignedImportsWhitelist = [
  '**/*.css',
  '@total-typescript/ts-reset',
  'server-only',
];

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // https://github.com/import-js/eslint-plugin-import/tree/main/config
    'plugin:import/errors',
    'plugin:import/warnings',
    // Must be last among the `import` configs
    // https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
    'plugin:import/typescript',
  ],
  plugins: ['import'],

  /**
   * NOTE:
   * Try this if you're using Webpack aliases and having issues...
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
    'import/no-deprecated': 1,
    // Make sure we only `import` packages that are defined in `package.json` `dependencies`
    'import/no-extraneous-dependencies': [
      1,
      {
        // Only allow these file patterns to import from `devDependencies`
        devDependencies: [
          './*.{js,cjs}',
          './.*.{js,cjs}',
          './*.config.*',
          '**/*.{spec,test}.ts',
          '**/test/**',
          '**/*.d.ts',
          'dangerfile.ts',
        ],
      },
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
    'import/no-namespace': 1,
    'import/extensions': 0,
    // This is a basic order that should be customized per project
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
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
        // Allow custom sort order for the `external` group
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#pathgroupsexcludedimporttypes-array
        // pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
        named: {
          enabled: true,
          types: 'types-first',
        },
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': 1,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': [1, { allow: unassignedImportsWhitelist }],
    'import/no-named-default': 1,
    'import/no-default-export': 1,
    'import/no-named-export': 0,
    'import/no-anonymous-default-export': 1,
    'import/group-exports': 0,
    'import/dynamic-import-chunkname': 0,
  },

  overrides: [
    // TypeScript files
    {
      files: ['**/*.{ts,tsx,mts,cts}'],
      settings: {
        // Support custom aliases (e.g. Next.js/Remix)
        'import/internal-regex': '^~/',
        // https://github.com/import-js/eslint-plugin-import#resolvers
        'import/resolver': {
          // https://github.com/import-js/eslint-import-resolver-typescript
          typescript: {
            alwaysTryTypes: true,
            // This might be needed in monorepos
            // project: `${__dirname}/tsconfig.json`,
          },
        },
      },
    },
  ],
};
