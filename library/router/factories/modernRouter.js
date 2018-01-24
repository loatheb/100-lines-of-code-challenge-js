module.exports = function router(map) {
  const links = [...document.getElementsByTagName('link')]
  links.forEach(link => {
    const target = link.getAttribute('target')
    link.onclick = function() {
      const method = map[target]
      history.pushState({}, target, target)
      if (method && typeof method === 'function') return method()
    }
  })
}
