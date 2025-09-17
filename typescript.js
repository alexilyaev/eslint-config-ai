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
        /**
         * Overrides of `plugin:@typescript-eslint/recommended`
         */
        // Emulate the TypeScript style of exempting names starting with `_`
        // https://typescript-eslint.io/rules/no-unused-vars/#what-benefits-does-this-rule-have-over-typescript
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

        /**
         * Overrides of `plugin:@typescript-eslint/recommended-type-checked`
         */
        // Allow numbers in template expressions, otherwise need to cast to string
        '@typescript-eslint/restrict-template-expressions': [
          'warn',
          { allowNumber: true },
        ],
        // Some false-positives (e.g. `Please upload files up to  ${filesize(maxSizeBytes)}`)
        '@typescript-eslint/no-base-to-string': 'off',
        // Too much work in React (e.g. non trivial in `useEffect`)
        '@typescript-eslint/no-floating-promises': 'off',
        // Too much work in React (e.g. passing async function to `onClick`)
        '@typescript-eslint/no-misused-promises': 'off',

        /**
         * From `plugin:@typescript-eslint/strict-type-checked`
         */
        // Turning off due to false positives.
        // e.g.
        // - https://codesandbox.io/p/devbox/4xq3ql?file=%2Findex.ts%3A20%2C8
        // - https://typescript-eslint.io/rules/no-unnecessary-condition/#when-not-to-use-it
        // - https://github.com/microsoft/TypeScript/issues/9998
        '@typescript-eslint/no-unnecessary-condition': 'off',

        /**
         * Overrides of `plugin:@typescript-eslint/stylistic`
         */
        // Disallow all Type Assertions. The default allows `as` assertions
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          { assertionStyle: 'never' },
        ],

        /**
         * Adding rules that are not part of the configs
         */
        // Ensure that type imports are imported with the `type` keyword
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        // Enforce using a particular method signature syntax.
        '@typescript-eslint/method-signature-style': 'warn',
        // Require each enum member value to be explicitly initialized.
        '@typescript-eslint/prefer-enum-initializers': 'warn',
      },
    },

    // TypeScript files with JSX only
    {
      files: ['**/*.tsx'],
      rules: {
        // False positive when using `onClick={() => someFunc()}`
        // Will result in an unnecessary function body, which bloats the code
        '@typescript-eslint/no-confusing-void-expression': 'off',
        // False positive when using `onClick={() => someAsyncFunc()}`
        '@typescript-eslint/no-misused-promises': [
          'warn',
          {
            checksVoidReturn: {
              // https://typescript-eslint.io/rules/no-misused-promises/#attributes
              attributes: false,
            },
          },
        ],
      },
    },
  ],
};
