// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionType as type } from '../../types/ReduxAction'
import { Loading } from '../shered/elements'
import type { ReduxState, RootReduxState } from '../../types/ReduxState'
import type { Dispatch } from 'redux'
import type { Repository, RepositoryList } from '../../types/APIDataModel'
import type { ActionDispatcher, ReduxAction } from '../../types/ReduxAction'

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
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`
const Item = styled.div`` // TODO style

type StateProps = {
  isLoading: boolean,
  repositoryList: RepositoryList
}
type DispatchProps = {
  fetchRepository: ActionDispatcher
}
type Props = StateProps & DispatchProps

class Github extends Component<Props> {
  componentDidMount() {
    this.props.fetchRepository()
  }

  render() {
    const { isLoading, repositoryList } = this.props
    const repoList = this.getRepoList(repositoryList)

    return (
      <Container>
        <Header>Github Page</Header>
        <List>{isLoading ? <Loading /> : repoList}</List>
      </Container>
    )
  }

  getRepoList(repositoryList: RepositoryList): React.Element<any> {
    return repositoryList.length ? (
      repositoryList.map((r: Repository) => (
        <Item key={r.id}>
          <p>{r.name}</p>
          <p>{r.description}</p>
          <p>{r.full_name}</p>
          <p>{r.owner.login}</p>
          <img src={r.owner.avatar_url} alt="avatar" />
        </Item>
      ))
    ) : (
      <p>no items.</p>
    )
  }
}

const MapStateToProps = (state: RootReduxState) => {
  const app: ReduxState = state.app
  return {
    isLoading: app.isLoading,
    repositoryList: app.repositoryList
  }
}

const MapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => {
  return {
    fetchRepository: async () => {
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
          payload: { repositoryList: repositoryList }
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Github)
