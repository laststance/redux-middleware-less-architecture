// @flow
import { createStore } from 'redux'
import appReducer from './reducer'
import type { ReduxState } from './types/ReduxState'

describe('INIT', () => {
  it('should defined initial state text', () => {
    const store = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.boot).toBe('not initialized.')
  })
})
