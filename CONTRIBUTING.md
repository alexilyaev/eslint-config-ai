# Contributing

This is mainly for myself, but might useful for others.

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
- `npm version minor`
  - This will do 3 things:
    - Update the version in `package.json`
    - Create a git tag
    - Create a git commit
- `git push`
- `npm publish`
- Update the GitHub Release Notes
