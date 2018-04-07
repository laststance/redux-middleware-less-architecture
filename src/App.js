// @flow
import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import IndexPage from './pages/index'
import GithubPage from './pages/github'
import { store } from './store'
import './index.css'

const history = createHistory()

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
