# react-cli-spinners

[![Greenkeeper badge](https://badges.greenkeeper.io/peterschussheim/react-cli-spinners.svg)](https://greenkeeper.io/)

Assorted text-based activity indicators for usage in React components, based on [cli-spinners](https://github.com/sindresorhus/cli-spinners).

---

[![Travis](https://img.shields.io/travis/peterschussheim/react-cli-spinners.svg?style=flat-square)](https://travis-ci.org/peterschussheim/react-cli-spinners)


- [react-cli-spinners](#react-cli-spinners)
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

Given a spinner `type`, `react-cli-spinners` looks for the spinner's details, stored as a JSON file, and provides the `Spinner` component with the following data:

```json
// example demonstrating the data consumed by `Spinner` React component

"arrow3": {
  "interval": 120,
  "frames": ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]
}
```

## Installation

This package is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/en/) and should be installed as one of your project's `dependencies`:

`yarn add react-cli-spinners` or `npm install -s react-cli-spinners`

## Usage

Please checkout [examples]()

<details>
<summary>
Basic
</summary>




```javascript

```
</details>


## Inspiration

- [cli-spinners](https://github.com/sindresorhus/cli-spinners)

## License

AGPL-3.0
