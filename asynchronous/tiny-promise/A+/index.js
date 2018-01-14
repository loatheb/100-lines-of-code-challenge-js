module.exports = Promise

var Promise = function (fn) {
  if (!(this instanceof Promise)) {
    throw new Error('Promise must use `new` syntax to call!')
  }
  if (typeof fn !== 'function') {
    throw new Error('Promise can only accept a function as paramter')
  }

  this._state = 0
  fn(this.resolve.bind(this), this.reject.bind(this))
}

Promise.prototype.resolve = function (val) {
  this._state = 1
  this._onFullfilled(val)
}

Promise.prototype.reject = function (error) {
  this._state = 2
  this._onRejected(error)
}

Promise.prototype.then = function (onFullfilled, onRejected) {
  this._onFullfilled = onFullfilled
  this._onRejected = onRejected
}

Promise.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('`Promise.all` must pass a array paramter')
  }

}

Promise.resolve = function () {

}

Promise.reject = function () {

}

Promise.prototype['catch'] = function () {

}

Promise.race = function (promises) {

}