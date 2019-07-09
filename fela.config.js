import unitPlugin from "fela-plugin-unit"
import namedKeysPlugin from "fela-plugin-named-keys"

const defaultUnit = "px"

const namedKeys = {
  // You can use some commonly used keys, like breakpoints and then use them in styles definitions
  // min768px: '@media (min-width: 768px)',
}

export default {
  plugins: [unitPlugin(defaultUnit), namedKeysPlugin(namedKeys)],
}
