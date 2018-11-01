import React, { Suspense, Fragment, lazy } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { CircleLoader } from 'react-spinners'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  return (
    <Container>
      <CircleLoader sizeUnit={'px'} size={150} color={'#3BD6B7'} />
    </Container>
  )
}

/* prettier-ignore */
const IndexPage = lazy(() => import('./pages/index'/* webpackChunkName: "IndexPage" */))
/* prettier-ignore */
const GithubPage = lazy(() => import('./pages/github'/* webpackChunkName: "GithubPage" */))

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Fragment>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/github" component={GithubPage} />
        </Fragment>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
