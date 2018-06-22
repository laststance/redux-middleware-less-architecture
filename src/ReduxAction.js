// @flow
import type { RepositoryList } from './types/APIDataModel'

export type InitAction = {
  type: '@@/App/INIT',
  payload: mixed
}

export type StartLoadingAction = {
  type: 'START_LOADING'
}

export type FetchRepositoryAction = {
  type: 'FETCH_REPOSITORY',
  payload: { repositoryList: RepositoryList, isLoading: false }
}

export type ReduxAction =
  | InitAction
  | StartLoadingAction
  | FetchRepositoryAction

export type AsyncAction = FetchRepositoryAction
