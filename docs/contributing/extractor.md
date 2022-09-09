# Contributing to VueTube Extractor

This section describes how to contribute to VueTube Extractor. If you're looking to contribute to any of our other
repositories, please refer to the [Contributing to VueTube](./README.md) page.

[![VueTube](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=VueTube-Extractor)](https://github.com/VueTubeApp/VueTube-Extractor)

VueTube Extractor contains all backend code for VueTube. It is written in TypeScript, and is compiled to JavaScript as a
NodeJS module. Although the project is still under active development and is not a part of the main VueTube app, upon
completion, the current API wrapper employed by VueTube will be deprecated in favor of VueTube Extractor.

Therefore, if you wish to contribute to VueTube's backend functionalities, you should contribute to VueTube Extractor.

# Prerequisites

- [NodeJS](https://nodejs.org/) 16.x or greater

# Getting Started

## Setup

- via Yarn (recommended)

```
yarn
```

- via NPM

```
npm i
```

## Testing & Building

VueTube Extractor uses Jest to test its code. To run tests, you may use the following command:

```
yarn test
```

You should also lint your code before building. To lint, you may use the following command:

```
yarn lint
```

Once all tests have passed, you may use the following command to build the library from TypeScript to JavaScript:

```
yarn build
```

# Coding Standards

## Coding Style

VueTube Extractor uses [ESLint](https://eslint.org/). Please ensure that your code is formatted before submitting a pull
request.

## Testing

> Please Note: YouTube's API may return different results for different users depending on their location as well as
> other factors. Therefore, there is a chance that your tests may fail inconsistently. If this happens, please try to
> locate the issue and fix it. If you are unable to fix it, please open an issue and describe the problem in as much
> detail as possible.

VueTube Extractor uses [Jest](https://jestjs.io/) to ensure that all code is tested before being merged into the main
branch. 