const { 
  createModernRouter,
  createNormalRouter,
  createFallbackRouter,
} = require('./factories')

const { isFunction } = require('./factories/utils')

module.exports = function bootstrap() {
  if (history && isFunction(history.pushState) && isFunction(history.replaceState)) {
    return createModernRouter()
  }
  if (isFunction(window.onhashchange)) {
    return createNormalRouter()
  }
  return createFallbackRouter()
}
