const { 
  createModernRouter,
  createNormalRouter,
  createFallbackRouter,
} = require('./factories')

function isFunction(fn) { return typeof fn === 'function' }

module.exports = function bootstrap() {
  if (history && isFunction(history.pushState) && isFunction(history.replaceState)) {
    return createModernRouter()
  }
  if (isFunction(window.onhashchange)) {
    return createNormalRouter()
  }
  return createFallbackRouter()
}
