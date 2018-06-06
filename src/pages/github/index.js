// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'redux-vanilla'
import { Loading } from '../../element'
import { actionType as type } from '../../types/ReduxAction'
import List from './List'
import type { RootReduxState } from '../../types/ReduxState'
import type { Dispatch } from 'redux'
import type { RepositoryList } from '../../types/APIDataModel'
import type { ReduxAction } from '../../types/ReduxAction'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Header = styled.h1`
  flex-basis: 1;
`

type Props = {| state: RootReduxState, dispatch: Dispatch<ReduxAction> |}

export class Github extends Component<Props> {
  fetchRepository = async () => {
    const dispatch = this.props.dispatch

    // Loading...
    dispatch({ type: type.START_ASYNC })

    // Call API
    try {
      const query = 'react'
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      )
      const repositoryList: RepositoryList = response.data.items

      dispatch({
        type: type.ASYNC_FETCH_REPOSITORY,
        payload: { repositoryList }
      })
    } catch (e) {
      console.error(e)
    }
  }

  componentDidMount() {
    this.fetchRepository()
  }

  render() {
    const {
      app: { isLoading, repositoryList }
    } = this.props.state

    return (
      <Container>
        <Header data-testid="github-header">Github Page</Header>
        {isLoading ? (
          <div data-testid="loading">
            <Loading />
          </div>
        ) : (
          <List data={repositoryList} />
        )}
      </Container>
    )
  }
}

export default connect(Github)
