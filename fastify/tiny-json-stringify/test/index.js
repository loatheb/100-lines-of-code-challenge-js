const assert = require('assert')
const stringify = require('..')

const schema = {
  firstname: 'string',
  lastname: 'string',
  age: 'integer',
}

const obj = {
  firstname: 'zhao',
  lastname: 'zhang',
  age: 9999,
}

assert.equal(typeof stringify(schema, obj), 'string')
assert.deepEqual(JSON.stringify(obj), stringify(schema, obj))

console.log('all test passed')
