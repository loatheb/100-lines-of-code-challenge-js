const { isFunction } = require('./utils')

module.exports = function router(map) {
  const links = [...document.getElementsByTagName('a')]
  const defaultRoute = window.location.pathname
  const defaultMethod = map[defaultRoute]

  if (defaultMethod && isFunction(defaultMethod)) {
    defaultMethod()
  }

  /* eslint no-param-reassign: [2, { "props": false }] */
  links.forEach((link) => {
    const target = link.getAttribute('target')
    link.onclick = function handler() {
      const method = map[target]
      window.history.pushState({}, target, target)
      if (method && isFunction(method)) return method()
      return false
    }
  })
}
