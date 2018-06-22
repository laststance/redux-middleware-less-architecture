import { createStore } from 'redux'
import reducer from './reducer'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

export const store = createStore(reducer, devToolsExtension)
