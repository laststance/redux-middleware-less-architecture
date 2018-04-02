# Redux No Middleware Pattarn

[![Greenkeeper badge](https://badges.greenkeeper.io/ryota-murakami/redux-no-middleware-pattarn.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/ryota-murakami/redux-no-middleware-pattarn.svg?style=svg)](https://circleci.com/gh/ryota-murakami/redux-no-middleware-pattarn)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/ryota-murakami/redux-no-middleware-pattarn/branch/master/graph/badge.svg)](https://codecov.io/gh/ryota-murakami/redux-no-middleware-pattarn)

> 🍷 write async logic without middleware in redux

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
