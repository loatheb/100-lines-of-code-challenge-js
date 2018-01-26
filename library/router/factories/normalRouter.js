const { isFunction } = require('./utils')

module.exports = function router(map) {
  const currentRoute = location.hash
  const method = map[currentRoute]

  if (method && isFunction(method)) {
    method()
  }
  window.onhashchange = function() {
    const currentRoute = location.hash
    const method = map[currentRoute]
    if (method && isFunction(method)) return method()
  }
}
