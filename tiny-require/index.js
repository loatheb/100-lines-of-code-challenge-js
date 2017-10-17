const vm = require('vm')

const wrapper = [
  '(function (exports, require, module) { ',
  '\n});'
]

function createNewContext() {
  const sandbox = {
    Buffer,
    clearImmediate,
    clearInterval,
    clearTimeout,
    setImmediate,
    setInterval,
    setTimeout,
    console,
    process,
  }
  sandbox.global = sandbox
  return sandbox
}

function wrap(script) {
  return wrapper[0] + script + wrapper[1]
}

const context = createNewContext()

const m = {
  exports: {},
}
const r = file => require(file)

module.exports = (filename, code, isInCurrentContext = false) => {
  const wrapper = wrap(code)
  const script = new vm.Script(wrapper, {
    filename,
    displayErrors: true
  })
  const compiledWrapper = isInCurrentContext ? script.runInThisContext() : script.runInNewContext(context)

  compiledWrapper.call(m.exports, m.exports, r, m)

  const res = Object.prototype.hasOwnProperty.call(m.exports, 'default')
      ? m.exports.default
      : m.exports
  return res
}
