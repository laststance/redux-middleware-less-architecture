// @flow
import { createStore } from 'redux'
import appReducer from './reducer'
import { emptyArray } from './reducer'
import { actionType as type } from './types/ReduxAction'
import { repository } from './testutil/dummyRepository'
import type { Store } from 'redux'
import type { RepositoryList } from './types/APIDataModel'
import type { AppState } from './reducer'
import type { ReduxAction } from './types/ReduxAction'

describe('INIT', () => {
  it('should "uninitialized." defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    const state: AppState = store.getState()

    expect(state.boot).toBe('uninitialized.')
  })

  it('should "initialized by redux." defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.INIT })
    const state: AppState = store.getState()

    expect(state.boot).toBe('initialized by redux.')
  })
})

describe('START_ASYNC', () => {
  it('should isLoading:false defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(false)
  })

  it('should be isLoading:true when dispatched START_ASYNC', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.START_ASYNC })
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(true)
  })
})

describe('ASYNC_FETCH_REPOSITORY', () => {
  it('should emptyArray defined in initianlState ', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    const state: AppState = store.getState()

    expect(state.repositoryList).toBe([])
  })

  it('should set repositoryList when dispatch', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [repository]
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: { repositoryList }
    })
    const state: AppState = store.getState()

    expect(state.repositoryList).toBe(repositoryList)
  })

  it('should set isLoading:false when dispatch', () => {
    const store: Store<AppState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [repository]

    store.dispatch({ type: type.START_ASYNC })
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: {
        repositoryList
      }
    })
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(false)
  })
})
