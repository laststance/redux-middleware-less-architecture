/* config-overrides.js */
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    ssr: false,
    displayName: true
  })

  return config
}
