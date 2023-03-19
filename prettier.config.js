/* eslint-disable line-comment-position, no-inline-comments */
'use strict';

/**
 * @see
 * https://prettier.io/docs/en/options.html
 *
 * - These are the default values for Prettier 2.x
 *   Except for `singleQuote`, because double quotes are not fun.
 * - A project should aim to use this config without overrides.
 *
 * Special notes:
 * - `printWidth` - Read this:
 *   https://prettier.io/docs/en/options.html#print-width
 */

module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true, // default: false
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
