const before = (fn, ...funcs) => (...args) => {
  funcs.forEach(func => func.apply(this, args))
  fn.apply(this, args)
}

function after(fn, ...funcs) {
  return (...args) => {
    fn.apply(this, args)
    funcs.forEach(func => func.apply(this, args))
  }
}

module.exports = {
  before,
  after,
}
