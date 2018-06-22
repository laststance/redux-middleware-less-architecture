// @flow
import type { ReduxAction } from './action'
import type { Reducer } from 'redux'
import type { RepositoryList } from './types/APIDataModel'

// react-router
export type Location = {
  pathname: string,
  search: string,
  hash: string
}

export type AppState = {
  boot: string,
  isLoading: boolean,
  repositoryList: RepositoryList
}

export type RootReduxState = {
  app: AppState,
  router: {
    location: Location
  }
}

export const initialState: AppState = {
  boot: 'uninitialized.',
  isLoading: false,
  repositoryList: []
}

const appReducer: Reducer<AppState, ReduxAction> = (
  state: AppState = initialState,
  action: ReduxAction
): AppState => {
  switch (action.type) {
    case '@@/App/INIT':
      return { ...state, boot: 'initialized by redux.' }

    case 'START_LOADING':
      return { ...state, isLoading: true }

    case 'FETCH_REPOSITORY':
      return {
        ...state,
        repositoryList: action.payload.repositoryList,
        isLoading: false
      }

    default:
      return state
  }
}

export default appReducer
