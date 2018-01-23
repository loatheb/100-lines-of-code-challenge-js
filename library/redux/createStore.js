const createStore = function (reducer) {
  let state
  let listener

  const getState = function () {
    return state
  }

  const dispatch = function (action) {
    state = reducer(state, action)
    if (listener && typeof listener === 'function') {
      return listener()
    }
  }

  const subscribe = function (cb) {
    listener = cb
    return function unsubscribe() {
      listener = null
    }
  }

  dispatch({ type: 'init' })

  return {
    dispatch,
    subscribe,
    getState
  }
}

module.exports = createStore
