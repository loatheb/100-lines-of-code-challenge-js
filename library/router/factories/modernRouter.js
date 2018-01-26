const { isFunction } = require('./utils')

module.exports = function router(map) {
  const links = [...document.getElementsByTagName('a')]
  const currentRoute = location.pathname
  const method = map[currentRoute]

  if (method && isFunction(method)) {
    method()
  }

  links.forEach(link => {
    const target = link.getAttribute('target')
    link.onclick = function() {
      const method = map[target]
      history.pushState({}, target, target)
      if (method && isFunction(method)) return method()
    }
  })
}
