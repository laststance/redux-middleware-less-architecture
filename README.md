# Redux Boilerplate Less Architecture

[![CircleCI](https://circleci.com/gh/ryota-murakami/redux-boilerplate-less-architecture.svg?style=svg)](https://circleci.com/gh/ryota-murakami/redux-boilerplate-less-architecture)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/ryota-murakami/redux-no-middleware-pattarn/branch/master/graph/badge.svg)](https://codecov.io/gh/ryota-murakami/redux-boilerplate-less-architecture)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> 🍷 write redux application from boilerplate less.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## What's this?
this is code example of write React/Redux application from boilerplate less.  
This is [create-react-app](https://github.com/facebook/create-react-app) based, please refer [/src](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/tree/master/src) folder.  

## Concept
Redux fundamental is pretty simple.
But actual Redux application codebase tend to bocome too complicated.

**I guess that because doesn't match Redux fandamental(dispatch action -> resolve reducer -> update state) and actual codebase(excess middlewares, boilerplate, spliting file etc).**

The problem is only influenced which way to how to scaling huge application, except for minimal understandable Redux usage.
This repo suggestion to you straightforword Redux application coding style, without Middleware,Boilerpate,Advanced Liblary.

**Requirements**
- [react](https://github.com/facebook/react)
- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)

### Specific Concepts
- [Clarify entire state shape and initial state in reducer file](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/blob/master/src/reducer.js#L6-L16)
- [Handle async logic without middleware, keep Redux work only dispatch action -> resolve reducer -> update state](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/blob/master/src/pages/github/index.js#L16-L33)

## Example
[CodeSandbox available🎉](https://codesandbox.io/s/github/ryota-murakami/redux-boilerplate-less-architecture)


## Inspiration
- [counter-vanilla](https://github.com/reactjs/redux/blob/master/examples/counter-vanilla/index.html)
- [why-do-we-need-middleware-for-async-flow-in-redux](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux)


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/5501268?v=4" width="100px;"/><br /><sub><b>ryota-murakami</b></sub>](http://ryota-murakami.github.io/)<br />[💻](https://github.com/ryota-murakami/redux-no-middleware-pattarn/commits?author=ryota-murakami "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License
MIT
