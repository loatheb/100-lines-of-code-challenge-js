const assert = require('assert')
const fs = require('fs')
const { install, remove } = require('../utils')

Promise.resolve(function() {
  return install('fetch-helper')
})
  .then(function() {
    assert(fs.existsSync('node_modules'), true)
    assert(fs.existsSync('node_modules/fetch-helper'), true)
    assert(fs.existsSync('node_modules/fetch-helper/index.js'), true)
  })
  .then(function() {
    remove('fetch-helper')
  })
  .then(function() {
    assert(fs.existsSync('node_modules'), true)
    assert(fs.existsSync('node_modules/fetch-helper'), false)
    console.log('all test passed')
  })
  .catch(e => {
    console.error(e.stack)
  })
