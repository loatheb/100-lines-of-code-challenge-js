function memoize(func) {
  let prevArgs = null
  let prevResult = null

  return function() {
    if (!prevArgs || !prevArgs.every((item, index) => item === arguments[index])) {
      prevResult = func.apply(func, arguments)
      prevArgs = [...arguments]
    }
    return prevResult
  }
}

module.exports = function(...funcs) {
  const result = funcs.pop()
  let recomputations = 0
  const memoizedFunc = memoize(function() {
    recomputations++
    return result.apply(result, arguments)
  })

  const selector = memoize(function() {
    const params = funcs.map(fun => fun.apply(fun, arguments))
    return memoizedFunc.apply(null, params)
  })

  Object.defineProperty(selector, 'recomputations', {
    get() {
      return recomputations
    },
    set() {
      throw new Error('[tiny-reselect]: cannot set recomputations directly!')
    }
  })
  return selector
}
