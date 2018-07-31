// @flow
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Loading } from '../../elements'
import { Container, Header, Form } from './style'
import List from './List'
import type { Dispatch } from 'redux'
import type { RepositoryList } from '../../types/APIDataModel'
import type { ReduxAction } from '../../action'
import type { ReduxState } from '../../reducer'

type StateProps = {
  isLoading: boolean,
  repositoryList: RepositoryList
}
type Props = { ...StateProps, dispatch: Dispatch<ReduxAction> }

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
    const { isLoading, repositoryList } = this.props

    return (
      <Container>
        <Header data-testid="github-header">GitHub Repo Search Example</Header>
        <Form />
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

const mapStateToProps = (state: ReduxState): StateProps => {
  return {
    isLoading: state.isLoading,
    repositoryList: state.repositoryList
  }
}

export default connect(mapStateToProps)(Github)
