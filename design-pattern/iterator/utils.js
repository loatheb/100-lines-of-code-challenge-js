exports.isArrayLike = function isArrayLike(item) {
  return Object.prototype.hasOwnProperty.call(item, 'length')
}
