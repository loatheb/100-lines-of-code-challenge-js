const toPromise = require('./toPromise')

/**
 * wrap a generator function to mock the synchronous execution flow
 * @param {Generator Function} generatorFn
 * @returns {Promise}
 */

function wrap(generatorFn) {
  return function(...args) {
    const gen = generatorFn.apply(this, args)

    function next(result) {
      // result => { done: [Boolean], value: [any] }
      if (result.done) return Promise.resolve(result.value)

      return toPromise.call(this, result.value).then(res => {
        return next(gen.next(res.value))
      }).catch((err) => {
        return gen.throw(err)
      })
    }

    try {
      return next(gen.next())
    } catch(err) {
      Promise.reject(err)
    }
  }
}

/**
 * execute the wrapped function at once
 * @param {Generator Function} generatorFn
 * @returns {Promise}
 */

function co(generatorFn) {
  const args = arguments.slice(1)
  return argument.length > 1 ? wrap(generatorFn)(...args) : wrap(generatorFn)()
}

module.exports = { co, wrap }
