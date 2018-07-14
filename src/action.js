// @flow
import type { RepositoryList } from './types/APIDataModel'

export type InitAction = {
  type: '@@/App/INIT',
  payload?: any
}

export type StartLoadingAction = {
  type: 'START_LOADING'
}

export type FetchRepositoryAction = {
  type: 'FETCH_REPOSITORY',
  payload: { repositoryList: RepositoryList }
}

export type ReduxAction =
  | InitAction
  | StartLoadingAction
  | FetchRepositoryAction

export type AsyncAction = FetchRepositoryAction
