// @flow
import React from 'react'
import { Container, Head, Github } from './style'

// TODO Error Boundaly
const index = () => {
  return (
    <Container>
      <Head>
        <h1>Redux Zero Middleware</h1>
      </Head>
      <Github to="/github">
        GitHub Repo Search Example(still development🙏)
      </Github>
    </Container>
  )
}
export default index
