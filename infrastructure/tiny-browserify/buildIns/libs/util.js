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

var util = {
  inherites: inherites
}

module.exports = util
