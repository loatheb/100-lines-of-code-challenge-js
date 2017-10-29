const SingletonFactory = function SingletonFactory(Constructor) {
  let instance
  return function(...args) {
    if (instance) return instance
    return instance = new Constructor(...args)
  }
}

/* todo: for test now use commonJS module export, will change to use the ES-module */
module.exports = SingletonFactory
// export default SingletonFactory
