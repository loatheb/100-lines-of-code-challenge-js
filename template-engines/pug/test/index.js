const { readFileSync } = require('fs')
const { resolve } = require('path')
const Parser = require('../parser')

test('parser template into AST', () => {
  const template = readFileSync(resolve(__dirname, 'index.tpug'), 'utf-8')
  const { ast } = new Parser(template)
  const expectedAst = [
    { type: 'tag', line: 0, val: 'html' },
    { type: 'indent', line: 1, val: '  ' },
    { type: 'tag', line: 1, val: 'head' },
    { type: 'indent', line: 2, val: '    ' },
    { type: 'tag', line: 2, val: 'title' },
    { type: 'text', line: 2, val: 'tPug' },
    { type: 'indent', line: 3, val: '  ' },
    { type: 'tag', line: 3, val: 'body' },
    { type: 'indent', line: 4, val: '    ' },
    { type: 'tag', line: 4, val: 'h1' },
    { type: 'text', line: 4, val: 'Hello World!' },
    { type: 'indent', line: 5, val: '    ' },
    { type: 'tag', line: 5, val: 'ul' },
    { type: 'indent', line: 6, val: '      ' },
    { type: 'tag', line: 6, val: 'li' },
    { type: 'text', line: 6, val: 'zhang.zhao' },
    { type: 'indent', line: 7, val: '      ' },
    { type: 'tag', line: 7, val: 'li' },
    { type: 'text', line: 7, val: 'lingli.chen' },
  ]
  expect(ast).toEqual(expectedAst)
})
