// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { flexRowCenter } from '../../const'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const TopContainer = styled.div`
  height: 50%;
  ${flexRowCenter};
`
const BottomContainer = styled.div`
  height: 50%;
  ${flexRowCenter};
`

// TODO Error Bound
const index = () => {
  return (
    <Container>
      <TopContainer>
        <h1>Index Page</h1>
      </TopContainer>
      <BottomContainer>
        <Link to="/github">GitHub Page</Link>
      </BottomContainer>
    </Container>
  )
}

export default index
