# ⚠️OUTDATED
The repo was created at before React Redux [Hooks](https://react-redux.js.org/api/hooks).
So almost code were little bit older style and could be useless today.

# Redux Middleware Less Architecture

[![CircleCI](https://circleci.com/gh/ryota-murakami/redux-middleware-less-architecture.svg?style=svg)](https://circleci.com/gh/ryota-murakami/redux-middleware-less-architecture)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> 🍷 write redux application from middleware less.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## What's this?
RBLA is the code example of write React/Redux application from middleware less.
This is [create-react-app](https://github.com/facebook/create-react-app) based, please refer [/src](https://github.com/ryota-murakami/redux-middleware-less-architecture/tree/master/src) folder.

## Concept
Redux fundamental is pretty simple.  
And you can also feel free to apply redux stuff, [Dan mentioned at dev.to](https://dev.to/miguelcast/comment/1nf1).  
But typically actual Redux application codebase tend to bocome too complicated.

**I guess that because doesn't match Redux fandamental(dispatch action -> resolve reducer -> update state) and actual codebase(excess middlewares, boilerplate, spliting file etc).**

The problem is only influenced which way to how to scaling huge application, except for minimal understandable Redux usage.  

This repo suggestion to you straightforword Redux application coding style, without Middleware,Boilerpate,Advanced Liblary.

But remember, the suggestion only targeting small aplication.  
**If your application will grow up to huge, I strongly reccomend read through [Idiomatic Redux by Mark Erikson.](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**

**Requirements**
- [react](https://github.com/facebook/react)
- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)

### Specific Concepts
- [Clarify entire state shape and initial state in reducer file](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/blob/master/src/reducer.js#L6-L16)
- [Handle async logic without middleware, keep Redux work only dispatch action -> resolve reducer -> update state](https://github.com/ryota-murakami/redux-middleware-less-architecture/blob/master/src/pages/github/index.js#L16-L33)
- [Clarify What kind of action are available? What kind of parameters should I give?](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/blob/master/src/action.js#L4-L16)

- [Dispatch action soon after bisiness logic never across function call scope flatly, and don't assign action string to const. In order to smooth debug used to Redux DevTools Extension. Copy action name, paste & search codebase immediately.](https://github.com/ryota-murakami/redux-boilerplate-less-architecture/blob/master/src/pages/github/index.js#L26-L37)

<details>
  <summary>Libraries not adopted</summary>
  <div>
    <h2>Too complicated for me when launch project.</h2>
    <ul>
      <li><a href="https://github.com/redux-saga/redux-saga" target="_blank">redux-saga</a>: Every things occuring in middleware. It's not Redux concern.</li>
      <li><a href="https://github.com/paularmstrong/normalizr">normalizr</a>: I can't imagine nomalized data structure immediately.</li>
      <li><a href="https://github.com/rt2zz/redux-persist">redux-persist</a>: Using LocalStoarage directly instead.</li>
      </ul>
  </div>
</details>

## Example
[CodeSandbox Available🎉](https://codesandbox.io/s/github/ryota-murakami/redux-boilerplate-less-architecture)

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
