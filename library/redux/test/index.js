const assert = require('assert')
const { createStore, bindActionCreator } = require('..')

const INIT_STATE = 0
let times = 0

const reducer = (state = INIT_STATE, action) => {
  switch(action.type) {
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

const store1 = createStore(reducer)
const store2 = createStore(reducer)

const unsubscribe1 = store1.subscribe(() => {
  times++
})
const unsubscribe2 = store2.subscribe(() => {
  times++
})

store1.dispatch({ type: 'INCREATEMENT' })
store1.dispatch({ type: 'INCREATEMENT' })
store1.dispatch({ type: 'DECREATEMENT' })

assert.equal(store1.getState(), 1)
assert.equal(store2.getState(), 0)
assert.equal(times, 3)

unsubscribe1()
unsubscribe2()
store1.dispatch({ type: 'INCREATEMENT' })

assert.equal(times, 3)
assert.equal(store1.getState(), 2)

const mapedDispatchFunc = bindActionCreator(() => ({ type: 'INCREATEMENT' }), store1.dispatch)
mapedDispatchFunc()

assert.equal(store1.getState(), 3)

console.log('all test passed')
