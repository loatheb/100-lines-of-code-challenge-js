function Callbacks(flags = '') {
  const flagsList = flags.split(' ')
  let fired
  class CallbacksHelper {
    constructor() {
      this.callbacks = []
      this.callbackObject = {}
      this.memoryArgs = []

      this.once = flagsList.includes('once')
      this.unique = flagsList.includes('unique')
      this.stopOnFalse = flagsList.includes('stopOnFalse')
      this.memory = flagsList.includes('memory')
    }
    add(fn) {
      const shouldAddFn = (this.unique && this.callbackObject[fn]) || !this.unique
      if (shouldAddFn) {
        this.callbacks.push(fn)
        this.callbackObject[fn] = true
      }
      if (this.memory) {
        this.memoryArgs.every((args) => {
          const status = fn.apply(fn, args)
          return !this.stopOnFalse || !status
        })
      }
      return this
    }
    fire(...args) {
      if (this.once && fired) return this

      this.memoryArgs.push(args)
      this.callbacks.every((cb) => {
        const status = cb.apply(cb, args)
        return !this.stopOnFalse || !status
      })
      fired = true
      return this
    }
  }

  return new CallbacksHelper()
}

module.exports = Callbacks
