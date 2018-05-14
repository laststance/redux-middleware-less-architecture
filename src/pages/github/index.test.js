// @noflow
import React from 'react'
import { createStore } from 'redux'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import axios from 'axios'
import { Github } from './index'
import mockResponse from './mockResponse'
import { store } from '../../store'
jest.mock('axios')
test('foo', async () => {
  expect(1).toBe(1)
  // axios.get.mockResolvedValueOnce({ data: mockResponse })
  //
  // const { getByText, getByTestId, container } = render(
  //   <Github state={store.getState()} dispatch={store.dispatch} />
  // )
  //
  // console.log(getByText, getByTestId, container)
})
