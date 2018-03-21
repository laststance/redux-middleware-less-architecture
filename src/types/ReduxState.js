// @flow
import type { RepositoryList } from './APIDataModel'

export const emptyArray: Array<any> = []

// react-router
type Location = {
  pathname: string,
  search: string,
  hash: string
}

// app: ReduxState
export type ReduxState = {
  boot: string,
  isLoading: boolean,
  repositoryList: RepositoryList
}

export const initialState: ReduxState = {
  boot: 'not initialized.',
  isLoading: false,
  repositoryList: emptyArray
}

export type RootReduxState = {
  app: ReduxState,
  router: {
    location: Location
  }
}
