const Callback = require('../index')

const fn1 = msg => console.log(`fn1 say ${msg}`)

const fn2 = msg => console.log(`fn2 say ${msg}`)

console.log('Callback without flag')
const cb = Callback()
cb.add(fn1)
cb.fire('cb1')
cb.add(fn2)
cb.fire('cb2')
cb.fire('boo far')

console.log('Callback with once flag')
const cb2 = Callback('once')
cb2.add(fn1)
cb2.fire('cb1')
cb2.add(fn2)
cb2.fire('cb2')
cb2.fire('boo far')

console.log('Callback with memory flag')
const cb3 = Callback('memory')
cb3.add(fn1)
cb3.fire('cb1')
cb3.add(fn2)
cb3.fire('cb2')
cb3.fire('boo far')
