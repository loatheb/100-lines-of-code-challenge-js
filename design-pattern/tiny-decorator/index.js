const before = (fn ,func) => {
  return () => {
    func.apply(this, arguments)
    fn.apply(this, arguments)
  }
}

const after = function (fn, func) {
  return () => {
    fn.apply(this, arguments)
    func.apply(this, arguments)
  }
}

module.exports = {
  before,
  after,
}