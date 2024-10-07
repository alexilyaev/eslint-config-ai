# Contributing

This is mainly for myself, but might be useful for others.

## Setup

- Clone the repo
- Install dependencies
  - `pnpm install`
- Link the package to itself for linting to work properly
  - `pnpm link --global`
  - `pnpm link --global eslint-config-ai`
- `pnpm lint`

## Add a new config

- Copy an existing config, e.g. `unicorn.js`
- Add to `README.md`
  - What's included?
  - Installation
  - Base + Plugins
  - Configured Rules
- Add to `all.js`
- Add to `package.json` as `devDependencies` and `peerDependencies` and make it optional in `peerDependenciesMeta`

## Publishing a new version

- Commit all changes before continuing
- `npm version patch` (or `minor` or `major`)
  - This will do 3 things:
    - Update the version in `package.json`
    - Create a git tag
    - Create a git commit
- `npm publish`
  - Will automatically push the commit and tag as well
- Update the GitHub Release Notes
