const vm = require('vm')
const { readFileSync } = require('fs')
const { resolve } = require('path')

const context = require('./context')
const wrap = require('./wrapper')

const m = {
  exports: {},
}
const r = file => global.require(file)

module.exports = function(filename, runInThisContext = false) {
  const code = readFileSync(resolve(process.cwd(), filename), 'utf-8')
  const wrapper = wrap(code)
  const script = new vm.Script(wrapper, {
    filename,
    displayErrors: true
  })

  const compiledWrapper = runInThisContext
    ? script.runInThisContext()
    : script.runInNewContext(context)

  compiledWrapper.call(m.exports, m.exports, r, m)

  const res = Object.prototype.hasOwnProperty.call(m.exports, 'default')
      ? m.exports.default
      : m.exports
  return res
}
