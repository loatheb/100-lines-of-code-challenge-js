const createStore = (reducer) => {
  let state
  let listener

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    if (listener && typeof listener === 'function') {
      return listener()
    }
  }

  const subscribe = (cb) => {
    listener = cb
    return () => {
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
