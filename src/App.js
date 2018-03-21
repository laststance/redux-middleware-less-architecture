// @flow
import React from 'react'
import { Route } from 'react-router'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer'
import IndexPage from './pages/index'
import GithubPage from './pages/github'
import './index.css'

const history = createHistory()
const middleware = routerMiddleware()

// $FlowFixMe
const store = createStore(
  combineReducers({ app: appReducer, router: routerReducer }),
  compose(
    applyMiddleware(middleware),
    typeof (window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') &&
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

// for test
export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="coroot">
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/github" component={GithubPage} />
      </div>
    </ConnectedRouter>
  </Provider>
)
