function memoize(func) {
  let prevArgs = null
  let prevResult = null

  return function memoizeHelper(...args) {
    if (!prevArgs || !prevArgs.every((item, index) => item === args[index])) {
      prevResult = func.apply(func, args)
      prevArgs = [...args]
    }
    return prevResult
  }
}

module.exports = function reselect(...funcs) {
  const result = funcs.pop()
  let recomputations = 0
  const memoizedFunc = memoize((...args) => {
    recomputations += 1
    return result.apply(result, args)
  })

  const selector = memoize((...args) => {
    const params = funcs.map(fun => fun.apply(fun, args))
    return memoizedFunc(...params)
  })

  Object.defineProperty(selector, 'recomputations', {
    get() {
      return recomputations
    },
    set() {
      throw new Error('[tiny-reselect]: cannot set recomputations directly!')
    },
  })
  return selector
}
