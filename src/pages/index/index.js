// @flow
import React from 'react'
import { Container, Head, Github } from './style'

// TODO Error Boundaly
const index = () => {
  return (
    <Container>
      <Head>
        <h1>Redux Middleware Less Architecture</h1>
      </Head>
      <Github to="/github">
        Async Github Data Fetch. and React-testing-library Demo
      </Github>
    </Container>
  )
}
export default index
