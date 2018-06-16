// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Top, Bottom } from './style'

// TODO Error Bound
const index = () => {
  return (
    <Container>
      <Top>
        <h1>Index Page</h1>
      </Top>
      <Bottom>
        <Link to="/github">GitHub Page</Link>
      </Bottom>
    </Container>
  )
}

export default index
