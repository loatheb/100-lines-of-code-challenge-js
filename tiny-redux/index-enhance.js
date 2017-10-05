var createStore = (function() {
  var state
  var listener

  var getState = function () {
    return state
  }

  var subscribe = function (cb) {
    listener = cb
    return function unsubscribe() {
      listener = null
    }
  }

  return function (reducer) {
    var dispatch = function (action) {
      state = reducer(state, action)
      if (listener && typeof listener === 'function') {
        return listener()
      }
    }

    dispatch({ type: 'init' })

    return {
      dispatch,
      subscribe,
      getState
    }
  }
})()

module.exports = createStore.createStore = createStore['default'] = createStore
