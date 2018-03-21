import TestUtils from 'react-dom/test-utils'
import { App } from './App'

describe('Critical', () => {
  it('should render App without Exception', () => {
    expect(() => {
      TestUtils.renderIntoDocument(App)
    }).not.toThrow()
  })
})
