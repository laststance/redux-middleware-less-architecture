// @flow
import { createStore } from 'redux'
import appReducer from './reducer'
import { emptyArray } from './types/ReduxState'
import { actionType as type } from './types/ReduxAction'

import type { Store } from 'redux'
import type { RepositoryList } from './types/APIDataModel'
import type { ReduxState } from './types/ReduxState'
import type { ReduxAction } from './types/ReduxAction'

describe('INIT', () => {
  it('should "uninitialized." defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.boot).toBe('uninitialized.')
  })

  it('should "initialized by redux." defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.INIT })
    const state: ReduxState = store.getState()

    expect(state.boot).toBe('initialized by redux.')
  })
})

describe('START_LOADING', () => {
  it('should isLoading:false defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(false)
  })

  it('should be isLoading:true when dispatched START_LOADING', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.START_ASYNC })
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(true)
  })
})

describe('ASYNC_FETCH_REPOSITORY', () => {
  it('should emptyArray defined in initianlState ', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.repositoryList).toBe(emptyArray)
  })

  it('should set repositoryList when dispatch', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [{ name: 'name' }] // TODO DataModel
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: { repositoryList }
    })
    const state: ReduxState = store.getState()

    expect(state.repositoryList).toBe(repositoryList)
  })

  it('should set isLoading:false when dispatch', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [{ gone: 'gone' }] // TODO DataModel

    store.dispatch({ type: type.START_ASYNC })
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: {
        repositoryList
      }
    })
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(false)
  })
})
