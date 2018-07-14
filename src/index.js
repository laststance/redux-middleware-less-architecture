import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'redux-vanilla'
import { BrowserRouter, Route } from 'react-router-dom'
import IndexPage from './pages/index'
import GithubPage from './pages/github'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/github" component={GithubPage} />
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
