import React, { Component } from 'react'
import { render, wait } from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import { Github } from './index'
import mockResponse from '../../testutil/mockResponse'
import { store } from '../../store'

test('fitst react-testing-liblary', async () => {
  // mock API fetch on ComponentDidMount()
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: mockResponse
    })
  )

  class DispatchEmitter extends Component {
    state = { reduxState: store.getState() }

    constructor(props) {
      super(props)
      store.subscribe(() => this.setState({ reduxState: store.getState() }))
    }

    render() {
      return <Github state={this.state.reduxState} dispatch={store.dispatch} />
    }
  }

  const { getByTestId, debug } = render(<DispatchEmitter />)

  expect(getByTestId('github-header')).toHaveTextContent('Github Page')
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(
    'https://api.github.com/search/repositories?q=react'
  )

  debug()

  await wait()

  debug()
})
