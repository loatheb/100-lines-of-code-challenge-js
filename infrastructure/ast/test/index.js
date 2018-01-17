const assert = require('assert')
const { parseScript } = require('..')

/* pattern with the ; */
const ast1 = parseScript('const foo = 123;')

/* pattern without the ; */
const ast2 = parseScript('const foo = 123')

const ESTREE_AST = {
  type: 'Program',
  body: [{
    type: 'VariableDeclaration',
    declarations: [{
      type: 'VariableDeclarator',
      init: {
        type: 'Literal',
        value: 123
      },
      id: {
        type: 'Identifier',
        name: 'foo'
      },
    }],
    kind: 'const'
  }],
  sourceType: 'script'
}

assert.deepEqual(ast1, ESTREE_AST)
assert.deepEqual(ast1, ast2)

console.log('all test passed')
