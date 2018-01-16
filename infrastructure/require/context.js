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

module.exports = createNewContext()
