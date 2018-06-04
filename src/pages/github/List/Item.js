// @flow
import React from 'react'
import styled from 'styled-components'
import type { Repository } from '../../../types/APIDataModel'

const Container = styled.div``

type Props = {
  repository: Repository
}

const Item = (props: Props) => {
  const { repository } = props

  return (
    <Container>
      <p>{repository.name}</p>
      <p>{repository.description}</p>
      <p>{repository.full_name}</p>
      <p>{repository.owner.login}</p>
      <img src={repository.owner.avatar_url} alt="avatar" />
    </Container>
  )
}

export default Item
