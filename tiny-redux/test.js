// const { createStore } = require('./index')
const { createStore } = require('./index-enhance')

const INIT_STATE = 0

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
  console.log('the store1 snapshot is: ', store1.getState())
})

const unsubscribe2 = store2.subscribe(() => {
  console.log('the store1 snapshot is: ', store2.getState())
})

store1.dispatch({ type: 'INCREATEMENT' })
store1.dispatch({ type: 'INCREATEMENT' })
store1.dispatch({ type: 'DECREATEMENT' })

unsubscribe1()
unsubscribe2()
store1.dispatch({ type: 'INCREATEMENT' })
console.log('store1', store1.getState())
console.log('store2', store2.getState())
