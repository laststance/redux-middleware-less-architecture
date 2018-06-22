import { createStore, combineReducers } from 'redux'
import appReducer from './reducer'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

export const store = createStore(
  combineReducers({ app: appReducer }),
  devToolsExtension
)
