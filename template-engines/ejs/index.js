function parse(str) {
  return `
    var buf = [];
    with(data) {
      buf.push('${
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .split("'").join("\\'")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("buf.push('")
          .split("\r").join("\\'")
      }');
    };
    return buf.join('');
  `
}

function compile(str) {
  return new Function('data', parse(str))
}

function render(str, data) {
  const fn = compile(str)
  return fn.call(null, data)
}

module.exports = {
  render,
  compile,
  parse,
}