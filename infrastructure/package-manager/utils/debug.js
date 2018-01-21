module.exports = function(name) {
  const predicate = process.env.DEBUG === name
  return function() {
    if (predicate) return console.log.apply(console, arguments)
  }
}
