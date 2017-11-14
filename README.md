# react-spinners

Assorted text-based activity indicators for usage in React components, based on [cli-spinners](https://github.com/sindresorhus/cli-spinners).

---

[![Travis](https://img.shields.io/travis/peterschussheim/react-spinners.svg?style=flat-square)](https://travis-ci.org/peterschussheim/react-spinners)

<!-- <a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/QBvQQkqUs7HakSKkUvJpfRwq/peterschussheim/prop-styles'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/QBvQQkqUs7HakSKkUvJpfRwq/peterschussheim/prop-styles.svg' />
</a> -->

- [react-spinners](#react-spinners)
  - [Why](#why)
  - [This Solution](#this-solution)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Inspiration](#inspiration)
  - [License](#license)

## Why

I love the look and simplicity of [sindresorhus'](https://github.com/sindresorhus) [collection](https://github.com/sindresorhus/cli-spinners) of text spinners/activity indicators for CLI applications and wanted to experiment with using them in React.

## This Solution

This package provides a single React component, `Spinner` and (for now) accepts, a single prop: `type`, which configures the component to use a specific spinner.

Given a spinner `type`, `react-spinners` looks for the spinner's details, stored as a JSON file, and provides the `Spinner` component with the following data:

```json
// example demonstrating the data consumed by `Spinner` React component

"arrow3": {
  "interval": 120,
  "frames": ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]
}
```

## Installation

This package is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/en/) and should be installed as one of your project's `dependencies`:

`yarn add react-spinners` or `npm install -s react-spinners`

## Usage

Please checkout [examples]()

<details>
<summary>
Basic
</summary>

[Live demo](https://codesandbox.io/s/kx3q8kmx17)

This is a minimal example of `prop-styles` usage with `glamorous`:


```javascript

```
</details>


## Inspiration

- [cli-spinners](https://github.com/sindresorhus/cli-spinners)

## License

AGPL-3.0
