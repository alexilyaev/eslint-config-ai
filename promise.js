// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  plugins: ['promise'],
  rules: {
    /**
     * eslint-plugin-promise
     *
     * @see
     * https://github.com/xjamundx/eslint-plugin-promise
     */
    'promise/always-return': 0,
    'promise/avoid-new': 0,
    'promise/catch-or-return': 1,
    'promise/no-callback-in-promise': 0,
    'promise/no-native': 1,
    'promise/no-nesting': 1,
    'promise/no-new-statics': 1,
    'promise/no-promise-in-callback': 0,
    'promise/no-return-in-finally': 1,
    'promise/no-return-wrap': 1,
    'promise/param-names': 1,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 0,
    'promise/valid-params': 1,
  },
};
