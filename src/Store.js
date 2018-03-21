// @flow
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import appReducer from './reducer'

const middleware = routerMiddleware()

// $FlowFixMe
export const store = createStore(
  combineReducers({ app: appReducer, router: routerReducer }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)
