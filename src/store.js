import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import appReducer from './reducer'

const middleware = routerMiddleware()

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

export const store = createStore(
  combineReducers({ app: appReducer, router: routerReducer }),
  compose(applyMiddleware(middleware), devToolsExtension)
)
