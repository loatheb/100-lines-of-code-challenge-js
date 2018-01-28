module.exports = function debug(name) {
  const predicate = process.env.DEBUG === name
  return function debugHelper(...args) {
    if (predicate) return console.log(args)
    return false
  }
}
