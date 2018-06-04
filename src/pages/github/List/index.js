// @flow
import React from 'react'
import styled from 'styled-components'
import { Loading } from '../../../shered/element'
import Item from './Item'
import type { Repository, RepositoryList } from '../../../types/APIDataModel'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

type Props = {|
  isLoading: boolean,
  repositoryList: RepositoryList
|}

const List = (props: Props) => {
  const { isLoading, repositoryList } = props

  const listItems = getRepoList(repositoryList)
  // TODO abstract isLoading
  return <Container>{isLoading ? <Loading /> : listItems}</Container>

  function getRepoList(
    repositoryList: RepositoryList
  ): React$Element<any> | React$Element<any>[] {
    return repositoryList.length ? (
      repositoryList.map((r: Repository) => <Item repository={r} />)
    ) : (
      <p>no items.</p>
    )
  }
}

export default List
