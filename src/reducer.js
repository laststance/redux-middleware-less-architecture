// @flow
import type { ReduxAction } from './action'
import type { Reducer } from 'redux'
import type { RepositoryList } from './types/APIDataModel'

export type ReduxState = {
  boot: string,
  isLoading: boolean,
  repositoryList: RepositoryList
}

export const initialState: ReduxState = {
  boot: 'uninitialized.',
  isLoading: false,
  repositoryList: []
}

const reducer: Reducer<ReduxState, ReduxAction> = (
  state: ReduxState = initialState,
  action: ReduxAction
): ReduxState => {
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
