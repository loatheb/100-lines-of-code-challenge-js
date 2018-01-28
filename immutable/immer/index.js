const PROXY_STATE = Symbol('immer-proxy-state')

class State {
  constructor(base) {
    this.modified = false
    this.finalized = false
    this.base = base
    this.copy = undefined
  }
  get(prop) {
    if (this.modified) {
      return this.copy[prop]
    }

    return this.base[prop]
  }
  set(prop, value) {
    if (!this.modified) {
      if (prop in this.base && Object.is(this.base[prop], value)) return

      this.markChanged()
    }

    this.copy[prop] = value
  }
  markChanged() {
    if (this.modified) return

    this.modified = true
    this.copy = Array.isArray(this.base) ? this.base.slice() : Object.assign({}, this.base)
  }
}

const handler = {
  get(target, prop) {
    if (prop === PROXY_STATE) return target

    return target.get(prop)
  },
  set(target, prop, value) {
    target.set(prop, value)
    return true
  },
}

function finalize(value) {
  if (value !== null && typeof value === 'object') {
    const proto = Object.getPrototypeOf(value)
    if (proto === null || proto === Object.prototype) {
      return Object.keys(value).reduce((memo, current) => ({
        ...memo,
        current: finalize(value[current]),
      }), {})
    }
  }

  if (!!value && !!value[PROXY_STATE]) {
    const state = value[PROXY_STATE]
    if (state.modified === true) {
      if (state.finalized === true) return state.copy

      state.finalized = true
      const { copy } = state
      const { base } = state
      Object.keys(copy).forEach((prop) => {
        if (copy[prop] !== base[prop]) copy[prop] = finalize(copy[prop])
      })
      return copy
    }
    return state.base
  }

  return value
}

function produce(baseState, producer) {
  const state = new State(baseState)
  const { proxy, revoke } = Proxy.revocable(state, handler)

  producer(proxy)

  const result = finalize(proxy)

  revoke()
  return result
}

module.exports = produce
