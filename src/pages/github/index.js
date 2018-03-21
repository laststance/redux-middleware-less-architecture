// @flow
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionType as type } from '../../types/ReduxAction'

import type { ReduxState, RootReduxState } from '../../types/ReduxState'
import type { Dispatch } from 'redux'
import type { RepositoryList } from '../../types/APIDataModel'
import type { $AxiosXHR } from 'axios'
import type { ActionDispatcher, ReduxAction } from '../../types/ReduxAction'

type Props = {
  repositoryList: RepositoryList,
  fetchRepository: ActionDispatcher
}

class Github extends Component<Props> {
  async componentDidMount() {
    this.props.fetchRepository()
  }

  render() {
    return <div>github</div>
  }
}

const MapStateToProps = (state: RootReduxState) => {
  const app: ReduxState = state.app
  return {
    repositoryList: app.repositoryList
  }
}

const MapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => {
  return {
    fetchRepository: async () => {
      // Loading...
      dispatch({ type: type.START_ASYNC })

      // Call API...
      try {
        const query = 'react'
        const response: $AxiosXHR<RepositoryList> = await axios.get(
          `https://api.github.com/search/repositories?q=${query}`
        )
        const repositoryList: RepositoryList = response.data

        dispatch({
          type: type.ASYNC_FETCH_REPOSITORY,
          payload: { repositoryList: repositoryList }
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Github)
