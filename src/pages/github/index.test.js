import React, { Component } from 'react'
import { render, wait } from 'react-testing-library'
import 'jest-dom/extend-expect'
import axios from 'axios'
import { Github } from './index'
import mockResponse from '../../testutil/mockResponse'
import { createStore } from 'redux'
import reducer from '../../reducer'

const store = createStore(reducer)

describe('github page', () => {
  it('fetch from API data shown when mounted', async () => {
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
        return (
          <Github
            isLoading={this.state.reduxState.isLoading}
            repositoryList={this.state.reduxState.repositoryList}
            dispatch={store.dispatch}
          />
        )
      }
    }

    // before Mmout, it meant isLoading false
    expect(store.getState().isLoading).toBe(false)

    // mount, it meant isLoading true
    const { getByTestId, container } = render(<DispatchEmitter />)

    expect(store.getState().isLoading).toBe(true)
    expect(getByTestId('loading')).toBeInTheDocument()
    expect(getByTestId('github-header')).toHaveTextContent(
      'GitHub Repo Search Example'
    )
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/search/repositories?q=react'
    )

    // dispatch fetch data to redux
    await wait()

    // after fetch data
    expect(store.getState().isLoading).toBe(false)
    const list = getByTestId('repo-list')
    expect(list.children.length).toBe(30)
    expect(container.firstChild).toMatchSnapshot()
  })
})
