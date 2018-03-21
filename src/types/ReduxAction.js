// @flow

// ActionType String
export const actionType = {
  INIT: '@@/App/INIT',
  START_LOADING: '@@/App/START_LOADING',
  FETCH_HOTTEST_REPOSITORY: '@@/App/FETCH_HOTTEST_REPOSITORY'
}

export type AsyncAction = typeof actionType.FETCH_HOTTEST_REPOSITORY

export type InitAction = {
  type: typeof actionType.INIT,
  payload: mixed
}

/**
 * start async loading such a api call
 *
 * @payload What kind of asynchronous action caused loading to start?
 */
export type StartLoadingAction = {
  type: typeof actionType.START_LOADING
}

export type ReduxAction = InitAction | StartLoadingAction

export type ActionDispatcher = Function
