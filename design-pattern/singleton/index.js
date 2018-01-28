function SingletonFactory(Constructor) {
  let instance
  return function singleton(...args) {
    if (instance) return instance
    instance = new Constructor(...args)
    return instance
  }
}

module.exports = SingletonFactory
