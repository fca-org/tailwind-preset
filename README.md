# FCA Tailwind CSS Config Preset

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
