const before = function before(fn ,[...funcs]) {
  return () => {
    funcs.forEach(func => func.apply(this, arguments))
    fn.apply(this, arguments)
  }
}

const after = function after(fn, [...funcs]) {
  return () => {
    fn.apply(this, arguments)
    funcs.forEach(func => func.apply(this, arguments))
  }
}

module.exports = {
  before,
  after,
}