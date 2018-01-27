const assert = require('assert')
const tejs = require('..')

function format(str) { return str.replace(/[\n\s]/g, '') }

const case1 = `
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
`

const result1 = tejs.render(case1, {
  user: { name: 'zhangzhao' },
})

assert.equal(format(result1), '<h2>zhangzhao</h2>')

const case2 = `
<ul>
  <% users.forEach(function(user){ %>
    <% if (user) { %>
      <h2><%= user.name %></h2>
    <% } %>
  <% }); %>
</ul>
`

const result2 = tejs.render(case2, {
  users: [
    { name: 'zhao.zhang' },
    { name: 'lingli.chen' },
  ]
})

assert.equal(format(result2), '<ul><h2>zhao.zhang</h2><h2>lingli.chen</h2></ul>')

console.log('all test passed')
