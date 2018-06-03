// @noflow
import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
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

  // TODO モックに設定したデータをGithubコンポーネントが受け取った時に期待される振る舞いをassertする
  const { getByText, getByTestId, container } = render(
    <Github state={store.getState()} dispatch={store.dispatch} />
  )

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(
    'https://api.github.com/search/repositories?q=react'
  )
})
