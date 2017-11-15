const { co } = require('./index')

/**
 * Convert promise, array, object, or generator function into a promise
 * @param {*} obj 
 * @returns {Promise}
 * @api public
 */

function toPromise(obj) {
  if (!obj) return obj
  if (isPromise(obj)) return obj
  if ('function' === typeof obj)  return fnToPromise(obj)
  if (Array.isArray(obj)) return arrayToPromise(obj)
  if (isObject(obj))  return objToPromise(obj)
  if (isGeneratorFunction(obj)) return co.call(this, obj)
  return obj
}


/**
 * @param {Function} fn 
 * @returns {Promise}
 */

function fnToPromise(fn) {
  return new Promise((resolve, reject) => {
    fn.call(this, (err, res) => {
      if (err) return reject(err)
      if (arguments.length > 2) res = slice.call(arguments, 1)
      resolve(res)
    });
  });
}

/**
 * 
 * @param {Array} arr
 * @returns {Promise}
 */

function arrayToPromise(arr) {
  return Promise.all(arr.map(toPromise, this))
}

/**
 * 
 * @param {Object} obj
 * @returns {Promise} 
 */

function objToPromise(obj) {
  const result = {}
  const promises = []

  for (let key in obj) {
    const prom = toPromise.call(this, obj[key])
    if (prom && isPromise(prom))  defer(prom, key)
    else result[key] = obj[key]
  }

  return Promise.all(promises).then(() => result)

  function defer(promise, key) {
    result[key] = undefined
    promises.push(promise.then(res => result[key] = res))
  }
}

/**
 * 
 * @param {*} obj
 * @returns {Boolean}
 */
function isPromise(obj) {
  // thenable
  return typeof obj.then === 'function'
}

/**
 * Check whether it's an object
 * @param {*} obj 
 * @returns {Boolean}
 */

function isObject(obj) {
  return obj.constructor === Object
}

/**
 * Check whether it's a generator function
 * @param {*} obj 
 * @returns {Boolean}
 */

function isGeneratorFunction(obj) {
  return obj.constructor.name === 'GeneratorFunction'
}

module.exports = toPromise