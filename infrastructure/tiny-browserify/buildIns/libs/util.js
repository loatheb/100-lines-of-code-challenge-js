var inherites = function(constructor, superConstructor) {
  constructor.super = superConstructor

  constructor.prototype = Object.create(superConstructor.prototype, {
    constructor: {
      value: constructor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
}

var isArray = function(item) {
  return Object.prototype.toString.call(item) === '[object Array]'
}

var isObject = function(item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

var keys = function(item) {
  if (isArray(item)) return item
  if (isObject(item)) {
    var results = []
    for (var i in item) {
      results.push(i)
    }
    return results
  }
  return []
}

var util = {
  inherites: inherites
}

module.exports = util
