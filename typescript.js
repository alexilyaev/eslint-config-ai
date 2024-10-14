// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    // TypeScript files
    {
      files: ['**/*.{ts,tsx,mts,cts}'],
      extends: [
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts
        'plugin:@typescript-eslint/recommended-type-checked',
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts
        'plugin:@typescript-eslint/strict-type-checked',
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: true,
      },
      rules: {
        // Disallow all Type Assertions. The default allows `as` assertions
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          { assertionStyle: 'never' },
        ],
        // Ensure that type imports are imported with the `type` keyword
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        // Don't warn about unused vars if they start with an underscore
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        // Keeping here in case it'll pop up
        // Might conflict in React patterns
        // '@typescript-eslint/no-misused-promises': [
        //   'warn',
        //   {
        //     checksVoidReturn: {
        //       attributes: false,
        //     },
        //   },
        // ],
      },
    },

    // TypeScript files with JSX only
    {
      files: ['**/*.tsx'],
      rules: {
        // False positive when using `onClick={() => someFunc()}`
        // Will result in an unnecessary function body, which bloats the code
        '@typescript-eslint/no-confusing-void-expression': 'off',
      },
    },
  ],
};
