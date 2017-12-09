if (typeof window === void 0 || !window.console || typeof window.console !== 'object') {
  window.console = {}
}

var console = window.console

var methods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'dirxml', 'table', 'trace', 'group', 'groupCollapsed',
  'groupEnd', 'clear', 'count', 'assert', 'markTimeline', 'profile', 'profileEnd', 'timeline', 'timelineEnd', 'time', 'timeEnd', 'timeStamp', 'context']

var properties = ['memory']
var i

for (i = 0; i < methods.length; i++) {
  var method = methods[i]
  if (!console[method]) console[method] = dummy
}

for (i = 0; i < properties.length; i++) {
  var property = properties[i]
  if (!console[property]) console[property] = {}
}

function dummy() {}

module.exports = console
