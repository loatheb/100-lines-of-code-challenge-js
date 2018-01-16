const assert = require('assert')
const CUSTOM_REQUIRE = require('..')

const res = CUSTOM_REQUIRE('./code.js')

assert.equal(typeof res, 'object')
assert.equal(res.text, 'Hello custom require')
assert.equal(res.func(), 'Hello custom require')

console.log('all test passed')
