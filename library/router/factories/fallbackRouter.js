const { isFunction } = require('./utils')

module.exports = function fallbackRouter(map) {
  const defaultRoute = window.location.pathname
  window['@@router@@'] = defaultRoute
  const defaultMethod = map[defaultRoute]

  if (defaultMethod && isFunction(defaultMethod)) {
    defaultMethod()
  }

  setInterval(() => {
    const currentRoute = window.location.pathname
    if (currentRoute !== window['@@router@@']) {
      const method = map[currentRoute]
      if (method && typeof method === 'function') {
        window['@@router@@'] = currentRoute
        return method()
      }
    }
    return false
  })
}
