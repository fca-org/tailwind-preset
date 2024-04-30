![FCA](assets/fca-logo.png)

# FCA: Tailwind CSS Config Preset

[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

This is a Tailwind CSS configuration preset that is shared across all [FCA](https://fca.org) projects.

## Installation

```shell
$ npm i -D fca-org/tailwind-preset
```

Or, target a release/tag version:

```shell
$ npm i -D fca-org/tailwind-preset#v0.1.0
```

## Usage

You can use this preset by putting this in your project's `tailwind.config.js`:

```js
module.exports = {
  content: [ ... ]
  presets: [require('@fca/tailwind-preset')],
  theme: { ... }
}
```

## Releases

To release a new version, simply open and merge a PR into `main`. This will generate a workflow that will use `semantic-release` to fully automate updating of versions in the repo, generation of Github changelog.

Also, please see [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) | [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for details about how to generate commits that will be to specification.

## Contributing

Create a `feature/*` branch in Github and open a pull request on `main` branch.

## License

Proprietary (Fellowship of Christian Athletes) &copy; 2024
