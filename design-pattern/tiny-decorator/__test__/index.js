const { before, after } = require('..')

function a() {
  console.log('a')
}

function b() {
  console.log('b')
}

before(a, b)()

after(a, b)()