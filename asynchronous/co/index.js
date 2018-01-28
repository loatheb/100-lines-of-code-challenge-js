/**
 * wrap a generator function to mock the synchronous execution flow
 * @param {Generator Function} generatorFn
 * @returns a promise
 */
function wrap(generatorFn) {
  return function wrapHelper(...args) {
    const gen = generatorFn.apply(this, args)

    function next(result) {
      if (result.done) return Promise.resolve(result.value)

      return Promise.resolve(result.value)
        .then(res => next(gen.next(res.value)))
        .catch(err => gen.throw(err))
    }

    try {
      return next(gen.next())
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

/**
 * execute the wrapped function at once, without providing any extraneous parameters
 * @param {Generator Function} generatorFn
 * @returns {Promise}
 */
function co(generatorFn) {
  return wrap(generatorFn)()
}

module.exports = { co, wrap }
