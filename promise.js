// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['promise'],
  rules: {
    /**
     * eslint-plugin-promise
     *
     * @see
     * https://github.com/xjamundx/eslint-plugin-promise
     */
    'promise/always-return': 'off',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'warn',
    'promise/no-callback-in-promise': 'off',
    'promise/no-native': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'warn',
    'promise/no-promise-in-callback': 'off',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/valid-params': 'warn',
  },
};
