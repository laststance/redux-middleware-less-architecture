// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Head, Github } from './style'

// TODO Error Bound
const index = () => {
  return (
    <Container>
      <Head>
        <h1>Redux Zero Middleware Example</h1>
      </Head>
      <Github>
        <Link to="/github">GitHub Page</Link>
      </Github>
    </Container>
  )
}

export default index
