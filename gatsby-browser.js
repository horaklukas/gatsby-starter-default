const React = require("react")
const { Provider } = require("react-fela")
const { createRenderer } = require("fela")

exports.wrapRootElement = ({ element }) => {
  let config
  try {
    config = require(`./fela.config.js`)
  } catch (e) {
    console.log(e)
  }
  const renderer = createRenderer(config)

  return <Provider renderer={renderer}>{element}</Provider>
}
