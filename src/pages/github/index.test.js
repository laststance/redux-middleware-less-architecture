import React from 'react'
import { render } from 'react-testing-library'
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

  const { getByTestId, debug } = render(
    <Github state={store.getState()} dispatch={store.dispatch} />
  )

  debug()

  expect(getByTestId('github-header')).toHaveTextContent('Github Page')
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(
    'https://api.github.com/search/repositories?q=react'
  )
})
