module.exports = function createStore(reducer) {
  let state
  let listener

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    if (listener && typeof listener === 'function') {
      listener()
    }
    return action
  }

  function subscribe(cb) {
    listener = cb
    return function unsubscribe() {
      listener = null
    }
  }

  dispatch({ type: 'init' })

  return {
    dispatch,
    subscribe,
    getState,
  }
}
