// @flow
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'redux-vanilla'
import { Loading } from '../../element'
import { Container, Header } from './style'
import List from './List'
import type { ReduxState } from '../../reducer'
import type { Dispatch } from 'redux'
import type { RepositoryList } from '../../types/APIDataModel'
import type { ReduxAction } from '../../action'

type Props = {| state: ReduxState, dispatch: Dispatch<ReduxAction> |}

export class Github extends Component<Props> {
  fetchRepository = async () => {
    const dispatch = this.props.dispatch

    // Loading...
    dispatch({ type: 'START_LOADING' })

    // Call API
    const query = 'react'
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`
    )
    const repositoryList: RepositoryList = response.data.items

    dispatch({
      type: 'FETCH_REPOSITORY',
      payload: { repositoryList }
    })
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
