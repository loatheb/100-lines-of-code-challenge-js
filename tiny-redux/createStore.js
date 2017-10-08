module.exports = createStore.createStore = createStore['default'] = createStore

var createStore = function (reducer) {
  var state
  var listener

  var getState = function () {
    return state
  }

  var dispatch = function (action) {
    state = reducer(state, action)
    if (listener && typeof listener === 'function') {
      return listener()
    }
  }

  var subscribe = function (cb) {
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
