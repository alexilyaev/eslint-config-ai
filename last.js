// @ts-check

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/disable-legacy.ts
    // Don't load this config when we're checking for deprecated rules
    process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED
      ? ''
      : 'plugin:@stylistic/disable-legacy',
    // https://github.com/prettier/eslint-config-prettier/blob/main/index.js
    'prettier',
  ],
};
