const { isFunction } = require('./utils')

module.exports = function(map) {
  const links = [...document.getElementsByTagName('a')]
  const currentRoute = location.pathname
  window['@@router@@'] = currentRoute
  const method = map[currentRoute]

  if (method && isFunction(method)) {
    method()
  }
  
  setInterval(function() {
    const currentRoute = location.pathname
    if (currentRoute !== window['@@router@@']) {
      const method = map[currentRoute]
      if (method && typeof method === 'function') {
        window['@@router@@'] = currentRoute
        return method()
      }
    }
  })
}
