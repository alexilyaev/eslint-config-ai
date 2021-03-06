# eslint-config-ai

> An opinionated set of ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html)
> by Alex Ilyaev

## Why?

I manage many projects and find myself copy/pasting configs between projects, which got out of hand
pretty quickly.

## What's included?

- `ai`
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - Assumes you're using [Prettier](https://github.com/prettier/prettier)
  - Disables styling rules that are covered by Prettier.
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
  - Disables React related styling rules that are covered by Prettier.
- `ai/jsdoc`
  - [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

## Installation

Required:

```shell
yarn add -D eslint babel-eslint prettier eslint-config-prettier eslint-config-ai
```

Optional (based on the configs you choose):

```shell
yarn add -D eslint-plugin-import eslint-plugin-jest eslint-plugin-lodash eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-compat eslint-plugin-jsdoc
```

- If you use npm, replace `yarn add` with `npm install`

## Usage

Add to your [`.eslintrc`](http://eslint.org/docs/user-guide/configuring):

### Base rules

This config extends `eslint:recommended` and sets up Prettier

```json
{
  "extends": ["ai"]
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
    "ai/jsdoc"
  ]
}
```

### Base + React

```json
{
  "extends": ["ai", "ai/react"]
}
```

### All (Base + Plugins + React)

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
- [react](./react.js)
- [jsdoc](./jsdoc.js)
