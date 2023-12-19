# eslint-config-ai

> An opinionated set of ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html)
> by Alex Ilyaev

## Why?

I manage many projects and find myself copy/pasting configs between projects,
which got out of hand pretty quickly.

## What's included?

- `ai`
  - [eslint:recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
  - Common base rules
- `ai/unicorn`
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- `ai/import`
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- `ai/jest`
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- `ai/lodash`
  - [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- `ai/promise`
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- `ai/react`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  - [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
- `ai/jsdoc`
  - [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- `ai/last`
  - [@stylistic/disable-legacy](https://eslint.style/guide/migration#disable-legacy-rules)
    - Disables styling rules that were deprecated and moved to `@stylistic`
  - [prettier](https://github.com/prettier/eslint-config-prettier/tree/main)
    - Disables styling rules that are covered by Prettier

## Installation

Required:

```shell
yarn add -D \
  prettier \
  eslint \
  eslint-config-prettier \
  @stylistic/eslint-plugin \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-config-ai
```

Optional (based on the configs you choose):

```shell
yarn add -D \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-lodash \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-compat \
  eslint-plugin-jsdoc
```

- If you use npm, replace `yarn add` with `npm install`

## Usage

Add to your [`.eslintrc`](http://eslint.org/docs/user-guide/configuring):

### Last

Disables styling rules that are covered by Prettier or deprecated and moved to
`@stylistic`

> Always add `ai/last` as the last `extends`

```json
{
  "extends": ["ai/last"]
}
```

### Base rules

This config extends `eslint:recommended` and sets up Prettier

```json
{
  "extends": ["ai", "ai/last"]
}
```

### Base + Plugins

You can choose which plugin to add

```json
{
  "extends": [
    "ai",
    "ai/unicorn",
    "ai/import",
    "ai/jest",
    "ai/lodash",
    "ai/promise",
    "ai/jsdoc",
    "ai/last"
  ]
}
```

### Base + React

```json
{
  "extends": ["ai", "ai/react", "ai/last"]
}
```

### All (Base + Plugins + React + Last)

```json
{
  "extends": ["ai/all"]
}
```

## Configured Rules

You can see what's currently configured in these files:

- [base](./base.js)
- [unicorn](./unicorn.js)
- [import](./import.js)
- [jest](./jest.js)
- [lodash](./lodash.js)
- [promise](./promise.js)
- [jsdoc](./jsdoc.js)
- [react](./react.js)
- [last](./last.js)
