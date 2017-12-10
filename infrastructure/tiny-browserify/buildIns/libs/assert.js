var inherites = require('./util').inherites

function toString(value) {
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return value.toString()
}

function travel(obj1, obj2, method) {
  for (var i in obj1) {
    try {
      method(obj1[i], obj2[i])
    } catch(e) {
      if (e instanceof AssertionError) return false
    }
  }
  return true
}

var tuples = [
  ['fail', fail],
  ['AssertionError', AssertionError],
  ['ok', ok],
  ['equal', equal],
  ['notEqual', notEqual],
  ['deepEqual', deepEqual],
  ['deepStrictEqual', deepStrictEqual],
  ['notDeepEqual', notDeepEqual],
  ['notDeepStrictEqual', notDeepStrictEqual],
  ['strictEqual', strictEqual],
  ['notStrictEqual', notStrictEqual],
  ['throws', throws],
  ['doesNotThrow', doesNotThrow],
  ['ifError', ifError],
]

function AssertionError(message) {
  inherites(AssertionError, Error)
  this.message = message
  this.name = 'AssertionError'
}

function ok(value, message) {
  message = toString(message) || toString(value) + ' == true'
  if (!value) {
    throw new AssertionError(message)
  }
}

function equal(actual, expected, message) {
  message = toString(message) || toString(actual) + ' == ' + toString(expected)
  if (actual != expected) {
    throw new AssertionError(message)
  }
}

function notEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' != ' + toString(expected)
  if (actual == expected) {
    throw new AssertionError(message)
  }
}

function deepEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' deepEqual ' + toString(expected)
  if (!travel(actual, expected, equal)) {
    throw new AssertionError(message)
  }
}

function deepStrictEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' deepEqual ' + toString(expected)
  if (!travel(actual, expected, strictEqual)) {
    throw new AssertionError(message)
  }
}

function notDeepEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' deepEqual ' + toString(expected)
  if (!travel(actual, expected, notStrictEqual)) {
    throw new AssertionError(message)
  }
}

function notDeepStrictEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' deepEqual ' + toString(expected)
  if (!travel(actual, expected, notDeepStrictEqual)) {
    throw new AssertionError(message)
  }
}

function strictEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' === ' + toString(expected)
  if (actual !== expected) {
    throw new AssertionError(message)
  }
}

function notStrictEqual(actual, expected, message) {
  message = toString(message) || toString(actual) + ' !== ' + toString(expected)
  if (actual === expected) {
    throw new AssertionError(message)
  }
}

function throws() {

}

function doesNotThrow() {

}

function ifError() {

}

function fail() {

}

var assert = function() {
  return ok.apply(ok, arguments)
}

for (var i = 0; i < tuples.length; i++) {
  var tuple = tuples[i]
  var name = tuple[0]
  var method = tuple[1]
  if (!assert(name)) {
    assert[name] = method
  }
}

module.exports = assert
