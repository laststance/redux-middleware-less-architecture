// @flow
import type { RepositoryList } from './APIDataModel'

export const actionType = {
  INIT: '@@/App/INIT',
  START_ASYNC: '@@/App/START_ASYNC',
  ASYNC_FETCH_REPOSITORY: '@@/App/ASYNC_FETCH_REPOSITORY'
}

export type InitAction = {
  type: typeof actionType.INIT,
  payload: mixed
}

export type StartAsyncAction = {
  type: typeof actionType.START_ASYNC
}

export type AsyncFetchRepositoryAction = {
  type: typeof actionType.ASYNC_FETCH_REPOSITORY,
  payload: { repositoryList: RepositoryList, isLoading: false }
}

export type ReduxAction =
  | InitAction
  | StartAsyncAction
  | StartAsyncAction
  | AsyncFetchRepositoryAction

export type AsyncAction = AsyncFetchRepositoryAction

export type ActionDispatcher = Function
