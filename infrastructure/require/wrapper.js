const wrapper = [
  '(function (exports, require, module) { ',
  '\n});',
]

module.exports = function wrap(script) {
  return `${wrapper[0]}${script}${wrapper[1]}`
}
