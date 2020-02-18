import React, { Component } from 'react'
import { render, wait } from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import { Github } from './index'
import mockResponse from '../../testutil/mockResponse'
import { createStore } from 'redux'
import reducer from '../../reducer'

// create redux
const store = createStore(reducer)
class DependencyInjectionCompoment extends Component {
  state = { reduxState: store.getState() }

  constructor(props) {
    super(props)
    store.subscribe(() => this.setState({ reduxState: store.getState() }))
  }

  render() {
    return (
      <Github
        isLoading={this.state.reduxState.isLoading}
        repositoryList={this.state.reduxState.repositoryList}
        dispatch={store.dispatch}
      />
    )
  }
}

describe('github page', () => {
  it('fetch from API data shown when mounted', async () => {
    // Mock axios.get() for disable real http request and set fake responce
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponse
      })
    )

    // Before mount, isLoading should be false
    expect(store.getState().isLoading).toBe(false)

    const { getByTestId, container } = render(<DependencyInjectionCompoment />)

    // After mount, isLoading should be true
    expect(store.getState().isLoading).toBe(true)
    expect(getByTestId('loading')).toBeInTheDocument()
    expect(getByTestId('github-header')).toHaveTextContent(
      'GitHub Repo Search Example'
    )
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=react'
    )

    // Simurate duration of api request
    await wait()

    // Testing what is showing browser, after completed all processes
    expect(store.getState().isLoading).toBe(false)
    const list = getByTestId('repo-list')
    expect(list.children.length).toBe(30)
    expect(container.firstChild).toMatchSnapshot()
  })
})
