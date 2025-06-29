// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
    'plugin:react/recommended',
    // Disable global `React` import requirement when using `react-jsx` in `tsconfig.json`
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'plugin:react/jsx-runtime',
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'compat'],
  parser: '@typescript-eslint/parser',
  settings: {
    // Shouldn't need this in the future:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1955#issuecomment-450780970
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * eslint-plugin-compat
     * Not extending `plugin:compat/recommended`:
     * https://github.com/amilajack/eslint-plugin-compat/blob/main/src/config/recommended.ts
     * Because we want only warnings and not errors.
     *
     * @see
     * https://github.com/amilajack/eslint-plugin-compat
     */
    'compat/compat': 'warn',

    /**
     * eslint-plugin-react
     *
     * @see
     * https://github.com/yannickcr/eslint-plugin-react
     */

    // Disabled
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': ['off', { forbid: ['any', 'array', 'object'] }],
    'react/forbid-component-props': ['off', { forbid: ['className', 'style'] }],
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/no-set-state': 'off',
    'react/no-unused-state': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react/require-optimization': 'off',
    'react/style-prop-object': 'off',

    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'react/jsx-no-literals': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/issues/1707
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',

    // Warning
    'react/boolean-prop-naming': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/forbid-foreign-prop-types': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': ['warn', { forbid: ['>', '}'] }],
    'react/no-unused-prop-types': 'warn',
    'react/prefer-es6-class': ['warn', 'always'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/self-closing-comp': 'warn',
    // Relevant for class components only
    'react/sort-comp': [
      'warn',
      {
        order: [
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'instance-methods',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/void-dom-elements-no-children': 'warn',

    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': 'warn',

    /**
     * eslint-plugin-react-hooks
     *
     * @see
     * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',

    /**
     * eslint-plugin-jsx-a11y
     *
     * @see
     * https://github.com/evcohen/eslint-plugin-jsx-a11y
     */
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  // Override config (only applied to files that match the given globs)
  overrides: [
    // Client files
    {
      files: ['{app,src}/**/*.{j,t}s?(x)'],
      env: {
        browser: true,
        node: false,
      },
      globals: {
        process: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {},
    },
  ],
};
