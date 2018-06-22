// @flow
import { createStore } from 'redux'
import reducer from './reducer'
import { repository } from './testutil/dummyRepository'
import type { Store } from 'redux'
import type { RepositoryList } from './types/APIDataModel'
import type { AppState } from './reducer'
import type { ReduxAction } from './action'

describe('INIT', () => {
  it('should "uninitialized." defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    const state: AppState = store.getState()

    expect(state.boot).toBe('uninitialized.')
  })

  it('should "initialized by redux." defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    store.dispatch({ type: '@@/App/INIT' })
    const state: AppState = store.getState()

    expect(state.boot).toBe('initialized by redux.')
  })
})

describe('START_LOADING', () => {
  it('should isLoading:false defined in initialState', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(false)
  })

  it('should be isLoading:true when dispatched START_ASYNC', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    store.dispatch({ type: 'START_LOADING' })
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(true)
  })
})

describe('FETCH_REPOSITORY', () => {
  it('should emptyArray defined in initianlState ', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    const state: AppState = store.getState()

    expect(state.repositoryList).toEqual([])
  })

  it('should set repositoryList when dispatch', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    const repositoryList: RepositoryList = [repository]
    store.dispatch({
      type: 'FETCH_REPOSITORY',
      payload: { repositoryList }
    })
    const state: AppState = store.getState()

    expect(state.repositoryList).toBe(repositoryList)
  })

  it('should set isLoading:false when dispatch', () => {
    const store: Store<AppState, ReduxAction> = createStore(reducer)
    const repositoryList: RepositoryList = [repository]

    store.dispatch({ type: 'START_LOADING' })
    store.dispatch({
      type: 'FETCH_REPOSITORY',
      payload: {
        repositoryList
      }
    })
    const state: AppState = store.getState()

    expect(state.isLoading).toBe(false)
  })
})
