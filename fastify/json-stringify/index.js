const wrapper = [
  'return `{',
  '}`',
]

function toString(key, type) {
  if (type === 'string') {
    return `"\${obj.${key}}"`
  }
  if (type === 'integer') {
    return `\${obj.${key}}`
  }
}

function stringify(schema, obj) {
  const keys = Object.keys(obj)

  const tuples = keys.map(key => {
    const type = schema[key]
    return `"${key}":${toString(key, type)}`
  })

  const genFn = new Function('obj', `
    ${wrapper[0]}${tuples.join(',')}${wrapper[1]}
  `)

  return genFn(obj)
}

module.exports = stringify