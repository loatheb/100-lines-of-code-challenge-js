const { createStore, bindActionCreator } = require('..')

const INIT_STATE = 0
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'INCREATEMENT': {
      return state + 1
    }
    case 'DECREATEMENT': {
      return state - 1
    }
    default: {
      return state
    }
  }
}

describe('[Redux]: test case for createStore', () => {
  test('store must be a plain object', () => {
    const store = createStore(reducer)
    expect(typeof store).toBe('object')
  })

  test('dispatch must be a function', () => {
    const { dispatch } = createStore(reducer)
    expect(typeof dispatch).toBe('function')
  })

  test('subscribe, unsubscribe must be a function', () => {
    const { subscribe } = createStore(reducer)
    const unsubscribe = subscribe(() => 1)
    expect(typeof subscribe).toBe('function')
    expect(typeof unsubscribe).toBe('function')
  })

  test('state changes as expected', () => {
    const store = createStore(reducer)
    store.dispatch({ type: 'INCREATEMENT' })
    store.dispatch({ type: 'INCREATEMENT' })
    store.dispatch({ type: 'DECREATEMENT' })
    expect(store.getState()).toBe(1)
  })

  test('subscribe, unsubscribe works as expected', () => {
    let times = 0
    const store = createStore(reducer)
    const unsubscribe = store.subscribe(() => {
      times += 1
    })
    store.dispatch({ type: 'INCREATEMENT' })
    store.dispatch({ type: 'INCREATEMENT' })
    store.dispatch({ type: 'DECREATEMENT' })
    expect(times).toBe(3)

    unsubscribe()
    store.dispatch({ type: 'INCREATEMENT' })
    store.dispatch({ type: 'DECREATEMENT' })
    expect(times).toBe(3)
  })
})

describe('[Redux]: test case for bindActionCreator', () => {
  test('bindActionCreator should return a function', () => {
    const { dispatch } = createStore(reducer)
    const mapedDispatchFunc = bindActionCreator(() => ({ type: 'INCREATEMENT' }), dispatch)
    expect(typeof mapedDispatchFunc).toBe('function')
  })

  test('bindActionCreator works as expected', () => {
    const { dispatch, getState } = createStore(reducer)
    const mapedDispatchFunc = bindActionCreator(() => ({ type: 'INCREATEMENT' }), dispatch)

    mapedDispatchFunc()
    expect(getState()).toBe(1)
  })
})
