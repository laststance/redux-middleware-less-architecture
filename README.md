# Redux No Middleware Pattarn

[![Greenkeeper badge](https://badges.greenkeeper.io/ryota-murakami/redux-no-middleware-pattarn.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/ryota-murakami/redux-no-middleware-pattarn.svg?style=svg)](https://circleci.com/gh/ryota-murakami/redux-no-middleware-pattarn)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/ryota-murakami/redux-no-middleware-pattarn/branch/master/graph/badge.svg)](https://codecov.io/gh/ryota-murakami/redux-no-middleware-pattarn)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> 🍷 write async logic without middleware in redux

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## What's this?
Redux No Middleware Pattarn is code example repository.  
it's a [create-react-app](https://github.com/facebook/create-react-app) based, please see [/src](https://github.com/ryota-murakami/redux-no-middleware-pattarn/tree/master/src) folder.  

also you could see [LIVE DEMO](https://hardcore-leavitt-db43ed.netlify.com/)💻 with redux-devtools chrome extention on the page.

## Concept
in 2018, Evolved JS syntax has capability of write as well smart async handling logic.  
i suppose redux-thunk like middleware isn't necessary when dispatch redux action during async logic.  
follwing example are my preffer straightforward way.

## Example

```js
const MapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => {
  return {
    fetchRepository: async () => {
      // Loading...
      dispatch({ type: type.START_ASYNC })

      // Call API
      try {
        const query = 'react'
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${query}`
        )
        const repositoryList: RepositoryList = response.data.items

        dispatch({
          type: type.ASYNC_FETCH_REPOSITORY,
          payload: { repositoryList: repositoryList }
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

```

## Inspiration
[why-do-we-need-middleware-for-async-flow-in-redux](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux)


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
