// @flow
import type { ReduxAction } from './action'
import type { Reducer } from 'redux'
import type { RepositoryList } from './types/APIDataModel'

export type AppState = {
  boot: string,
  isLoading: boolean,
  repositoryList: RepositoryList
}

export type ReduxState = {
  app: AppState
}

export const initialState: AppState = {
  boot: 'uninitialized.',
  isLoading: false,
  repositoryList: []
}

const reducer: Reducer<AppState, ReduxAction> = (
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

export default reducer
