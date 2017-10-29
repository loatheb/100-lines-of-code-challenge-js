function hasMinified () {}

var isProduction = function () {
  return process.env.NODE_ENV === 'production' && typeof hasMinified.name === 'string' && hasMinified.name !== 'hasMinified'
}

var composeBase = function (type) {
  var reduceMethod = type === 'right' ? [].reduce : [].reduceRight
  return function () {
    var funcs = [].slice.call(arguments)

    if (funcs.length === 0) {
      return arg => arg
    }

    if (funcs.length === 1) {
      return funcs[0]
    }

    return funcs[reduceMethod]((a, b) => (...args) => a(b(...args)))
  }
}

var composeLeft
var compose = composeLeft = composeBase()
var composeRight = composeBase('right')

module.exports = {
  isProduction: isProduction,
  compose: compose,
  composeLeft: composeLeft,
  composeRight: composeRight
}