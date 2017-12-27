const wrapper = [
  `return '{'`,
  `}`,
]

function toString(value, type) {
  if (type === 'string') {
    return `'obj.${value}'`
  }
  if (type === 'integer') {
    return `obj.${value}`
  }
}

function stringify(schema, obj) {
  const keys = Object.keys(obj)

  const tuples = keys.map(key => {
    const type = schema[key]
    const value = obj[key]
    return `'${key}': ${toString(value, type)}`
  })

  return new Function('obj', `
    ${wrapper[0]}${tuples.join(', ')}${wrapper[1]}
  `)
}