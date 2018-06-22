// @flow
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'redux-vanilla'
import IndexPage from './pages/index'
import GithubPage from './pages/github'
import { store } from './store'
import './index.css'

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/github" component={GithubPage} />
      </Fragment>
    </BrowserRouter>
  </Provider>
)
