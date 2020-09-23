'use strict';

module.exports = {
  plugins: ['react', 'compat'],

  extends: ['plugin:react/recommended', 'prettier/react'],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
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

    // Disabled, May conflict with Prettier
    'react/jsx-closing-bracket-location': [0, 'line-aligned'],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-equals-spacing': [0, 'never'],
    'react/jsx-indent': [0, 2],
    'react/jsx-tag-spacing': [
      0,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': [
      0,
      {
        declaration: false,
        assignment: false,
        return: true,
      },
    ],

    // Disabled
    'react/forbid-elements': 0,
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/no-set-state': 0,
    'react/no-unused-state': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-prop-types': 0,
    'react/require-optimization': 0,
    'react/style-prop-object': 0,

    'react/jsx-curly-spacing': [0, 'always', { allowMultiline: true }],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent-props': [0, 2],
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-sort-props': 0,
    // https://github.com/yannickcr/eslint-plugin-react/issues/1707
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,

    // Warning
    'react/boolean-prop-naming': 1,
    'react/default-props-match-prop-types': 1,
    'react/forbid-component-props': [1, { forbid: ['className', 'style'] }],
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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-target-blank': 1,
    'react/jsx-pascal-case': 1,
  },

  // Specific settings used by different plugins
  settings: {
    // Shouldn't need this in the future:
    // https://github.com/yannickcr/eslint-plugin-react/issues/1955#issuecomment-450780970
    react: {
      version: 'detect',
    },
  },

  // Override config (only applied to files that match the given globs)
  overrides: [
    // Client files
    {
      files: ['app/**/*.js'],
      env: {
        browser: true,
        node: false,
      },
      globals: {
        process: true,
        module: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // In ES6 modules, 'use strict' is enabled by default
        strict: [1, 'never'],
      },
    },
  ],
};
