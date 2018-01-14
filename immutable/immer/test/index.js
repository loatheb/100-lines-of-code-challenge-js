const assert = require('assert')
const produce = require('..')

const state = {
  done: false,
  hahaha: 'string',
}

const newState = produce(state, (draft) => {
  draft.done = true
})

assert.notEqual(state.done, newState.done)
assert.equal(state.hahaha, newState.hahaha)

// check whether they are still the same reference
newState.done = false
assert.notEqual(state, newState)

console.log('all test passed')
