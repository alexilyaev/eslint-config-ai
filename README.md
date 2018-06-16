# eslint-config-ai

> An opinionated set of ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html)
> by Alex Ilyaev

## Why?

I manage many projects and find myself copy/pasting configs between projects, which got out of hand
pretty quickly.

## What's included?

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - Assumes you're using [Prettier](https://github.com/prettier/prettier)
  - Disabling styling rules that are covered by Prettier
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)

## Installation

Required:

```
yarn add -D eslint babel-eslint prettier eslint-config-prettier eslint-config-ai
```

Optional (based on the configs you choose):

```
yarn add -D eslint-plugin-jest eslint-plugin-lodash eslint-plugin-promise eslint-plugin-compat eslint-plugin-react
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
  "extends": ["ai", "ai/jest", "ai/lodash", "ai/promise"]
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
- [jest](./jest.js)
- [lodash](./lodash.js)
- [promise](./promise.js)
- [react](./react.js)
