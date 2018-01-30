const { render } = require('..')

function format(str) { return str.replace(/[\r\t\n\s]/g, '') }

describe('[ejs]: test for the render scope', () => {
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
