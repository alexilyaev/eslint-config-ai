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
    'import/no-unresolved': 'warn',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'warn',
    'import/no-dynamic-require': 'warn',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'warn',
    'import/no-self-import': 'warn',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/no-relative-parent-imports': 'off',

    // Helpful warnings
    'import/no-deprecated': 'warn',
    // Make sure we only `import` packages that are defined in `package.json` `dependencies`
    'import/no-extraneous-dependencies': [
      'warn',
      {
        // Only allow these file patterns to import from `devDependencies`
        devDependencies: [
          './*.{js,cjs}',
          './.*.{js,cjs}',
          './*.config.*',
          '**/*.{spec,test,bench,benchmark}.ts',
          '**/test/**',
          '**/*.d.ts',
          'dangerfile.ts',
        ],
      },
    ],
    'import/no-mutable-exports': 'warn',
    'import/no-unused-modules': 'off',

    // Module systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'warn',
    'import/no-nodejs-modules': 'off',

    // Style guide
    'import/first': 'warn',
    'import/exports-last': 'off',
    'import/no-namespace': 'warn',
    'import/extensions': 'off',
    // This is a basic order that should be customized per project
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'warn',
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
    'import/newline-after-import': 'warn',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': [
      'warn',
      { allow: unassignedImportsWhitelist },
    ],
    'import/no-named-default': 'warn',
    'import/no-default-export': 'warn',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'warn',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
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
