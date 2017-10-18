function dump() {}
function isFunction(fn) { return typeof fn === 'function' }

export default (reducer) => {
  let store
  let listener = dump

  class CreateStore {
    constructor() {
      this.dispatch({ type: 'init' })
    }
    getState = () => store
    dispatch = action => {
      store = reducer(store, action)
      return listener()
    }
    subscribe = (cb) => {
      if (isFunction(cb)) listener = cb
      return () => listener = dump
    }
  }

  return new CreateStore()
}
