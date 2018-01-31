const { render, parse, compile } = require('..')

describe('[ejs]: test for the render method', () => {
  function format(str) { return str.replace(/[\r\t\n\s]/g, '') }

  test('render simple html snippet', () => {
    const template = '<% if (user) { %><h2><%= user.name %></h2><% } %>'
    const data = {
      user: { name: 'zhangzhao' },
    }

    const result = render(template, data)
    expect(format(result)).toBe('<h2>zhangzhao</h2>')
  })

  test('render complex html snippet with array forEach loop', () => {
    const template = `
      <ul>
        <% users.forEach(function(user){ %>
          <% if (user) { %>
            <h2><%= user.name %></h2>
          <% } %>
        <% }); %>
      </ul>
    `
    const data = {
      users: [
        { name: 'zhao.zhang' },
        { name: 'lingli.chen' },
      ],
    }

    const result = render(template, data)
    expect(format(result)).toBe('<ul><h2>zhao.zhang</h2><h2>lingli.chen</h2></ul>')
  })
})

describe('[ejs]: test for the parse method', () => {
  test('parse method will receive a string and return a string', () => {
    const template = 'Hello World'
    expect(typeof parse(template)).toBe('string')
  })
})

describe('[ejs]: test for the compile method', () => {
  const template = 'Hello World'
  test('compile method will string and return a function', () => {
    expect(typeof compile(template)).toBe('function')
  })
})
