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
class DIConmponent extends Component {
  state = { reduxState: store.getState() }

  constructor(props) {
    super(props)
    store.subscribe(() =>
      this.setState(() => {
        return { reduxState: store.getState() }
      })
    )
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
  it('Testing data fetch and display', async () => {
    // Mock axios.get() for disable real http request and set fake responce
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponse
      })
    )

    // Before mount, isLoading should be false
    expect(store.getState().isLoading).toBe(false)

    // render compoment
    const { getByTestId, getByText, container } = render(<DIConmponent />)
    // check web page header title
    expect(getByTestId('github-header')).toHaveTextContent(
      'GitHub Repo Search Example'
    )

    // running get request to 'https://api.github.com/search/repositories?q=react'
    // After mount, isLoading should be true
    expect(store.getState().isLoading).toBe(true)
    expect(getByTestId('loading')).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=react'
    )

    // Simurate duration of API request
    await wait()

    // Should be turn off when resolve API request
    expect(store.getState().isLoading).toBe(false)

    // Original code is requesting 30 items to API
    const list = getByTestId('repo-list')
    expect(list.children.length).toBe(30)

    // Shold be displaying facebook/react repo as a search result
    expect(getByText('react')).toBeTruthy()
    expect(
      getByText(
        'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
      )
    ).toBeTruthy()
    expect(getByText('facebook')).toBeTruthy()

    // Entire web page snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
