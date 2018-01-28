import {
  isArrayLike,
} from './utils'
/**
 * Inner Iterator: both support the array and array-like item
 *
 */

function iterator(obj) {
  if (!isArrayLike(iterator)) throw new TypeError(`${Object.prototype.toString.call(obj)} doesn't an iterator like item`)

  let current = 0;
  const next = () => {
    current += 1
  }
  const isDone = () => current >= obj.length
  const getCurrent = () => obj[current]

  return {
    next,
    isDone,
    getCurrent,
  }
}

module.exports = iterator
