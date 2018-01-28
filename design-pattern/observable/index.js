const Event = {
  store: {},
  listen(key, fn) {
    if (!this.store[key]) {
      this.store[key] = []
    }
    this.store[key].push(fn)

    return () => {
      this.store[key].filter(cb => cb !== fn)
    }
  },
  trigger(key, ...args) {
    if (!this.store[key]) return
    this.store[key].forEach(fn => fn.apply(this, args))
  },
}

export default Event
