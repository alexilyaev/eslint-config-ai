// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['plugin:react/recommended'],
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
     *
     * @see
     * https://github.com/amilajack/eslint-plugin-compat
     */
    'compat/compat': 1,

    /**
     * eslint-plugin-react
     *
     * @see
     * https://github.com/yannickcr/eslint-plugin-react
     */

    // Disabled
    'react/forbid-elements': 0,
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],
    'react/forbid-component-props': [0, { forbid: ['className', 'style'] }],
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/no-set-state': 0,
    'react/no-unused-state': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-prop-types': 0,
    'react/require-optimization': 0,
    'react/style-prop-object': 0,

    'react/jsx-handler-names': 0,
    'react/jsx-key': 0,
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-no-literals': 0,
    // https://github.com/yannickcr/eslint-plugin-react/issues/1707
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,

    // Warning
    'react/boolean-prop-naming': 1,
    'react/default-props-match-prop-types': 1,
    'react/forbid-foreign-prop-types': 1,
    'react/no-children-prop': 1,
    'react/no-danger-with-children': 1,
    'react/no-will-update-set-state': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 1,
    'react/no-string-refs': 1,
    'react/no-typos': 1,
    'react/no-unescaped-entities': [1, { forbid: ['>', '}'] }],
    'react/no-unused-prop-types': 1,
    'react/prefer-es6-class': [1, 'always'],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    // Relevant for class components only
    'react/sort-comp': [
      1,
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
    'react/void-dom-elements-no-children': 1,

    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-target-blank': 1,
    'react/jsx-pascal-case': 1,

    /**
     * eslint-plugin-react-hooks
     *
     * @see
     * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,

    /**
     * eslint-plugin-jsx-a11y
     *
     * @see
     * https://github.com/evcohen/eslint-plugin-jsx-a11y
     */
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
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
        module: true,
        require: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // In ES6 modules, 'use strict' is enabled by default
        strict: [1, 'never'],
      },
    },
  ],
};
