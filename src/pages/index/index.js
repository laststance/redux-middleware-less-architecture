// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Head, Github } from './style'

// TODO Error Bound
const index = () => {
  return (
    <Container>
      <Head>
        <h1>Redux Zero Middleware</h1>
      </Head>
      <Github>
        <Link to="/github">GitHub Repo Search Example</Link>
      </Github>
    </Container>
  )
}

export default index
