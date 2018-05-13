import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import axiosMock from 'axios'
import { Github } from './index'
import mockResponse from './mockResponse'

test('foo', async () => {
  const initialState = {}
  const dispatch = f => f
  axiosMock.get.mockResolvedValueOnce({ data: mockResponse })
  const { getByText, getByTestId, container } = render(<Github />)
})
