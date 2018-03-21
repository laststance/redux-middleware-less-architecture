// @flow
import { actionType as type } from './types/ReduxAction'
import { initialState } from './types/ReduxState'

import type { Reducer } from 'redux'
import type { ReduxState } from './types/ReduxState'
import type { ReduxAction } from './types/ReduxAction'

const appReducer: Reducer<ReduxState, ReduxAction> = (
  state: ReduxState = initialState,
  action: ReduxAction
): ReduxState => {
  switch (action.type) {
    case type.INIT:
      return { ...state, boot: 'initialized.' }

    default:
      return state
  }
}

export default appReducer
