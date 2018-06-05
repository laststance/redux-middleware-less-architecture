// @flow
import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import type { Repository, RepositoryList } from '../../../types/APIDataModel'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

type Props = {|
  data: RepositoryList
|}

const List = (props: Props) => {
  const { data } = props
  if (data.length === 0) {
    return (
      <Container>
        <p>no items.</p>
      </Container>
    )
  }

  return (
    <Container data-testid="repo-list">
      {data.map((r: Repository) => <Item repository={r} key={r.id} />)}
    </Container>
  )
}

export default List
