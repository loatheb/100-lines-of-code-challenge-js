const {
  createModernRouter,
  createNormalRouter,
  createFallbackRouter,
} = require('./factories')

const { isFunction } = require('./factories/utils')

module.exports = function bootstrap() {
  if (window.history && isFunction(window.history.pushState) && isFunction(window.history.replaceState)) {
    return createModernRouter()
  }
  if (isFunction(window.onhashchange)) {
    return createNormalRouter()
  }
  return createFallbackRouter()
}
