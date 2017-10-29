const assert = require('assert')
const SingletonFactory = require('..')

class a {
  constructor(a) {
    this.a = a
  }
}

assert.deepEqual(new a(1), {a: 1})
assert.deepEqual(new a(2), {a: 2})

const singleInstanceA = SingletonFactory(a)
assert.deepEqual(new singleInstanceA(1), {a: 1})
assert.deepEqual(new singleInstanceA(2), {a: 1})


console.log('all test passed')