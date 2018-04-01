import TestUtils from 'react-dom/test-utils'
import React from 'react'
import { App } from './App'

describe('App', () => {
  it('render App without Crash', () => {
    expect(() => {
      TestUtils.renderIntoDocument(<App />)
    }).not.toThrow()
  })
})
