import {
  isArrayLike,
} from './utils'
/**
 * Inner Iterator: both support the array and array-like item
 *
 */

const each = function(iterator, callback) {
  if (isArrayLike(iterator)) {
    for (let i = 0; i < iterator.length; i++) {
      if (!callback.call(iterator[i], iterator[i], i, iterator)) break
    }
  } else {
    for (let i in iterator) {
      if (!callback.call(iterator[i], iterator[i], i, iterator)) break
    }
  }
  return iterator
}

const Iterator = function (obj) {
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