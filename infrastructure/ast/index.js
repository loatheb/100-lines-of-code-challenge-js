/* ESTree standard AST parser, see https://github.com/estree/estree for more detail */
class Parser {
  constructor(code) {

  }
}

/* see https://tc39.github.io/ecma262/#sec-ecmascript-language-scripts-and-modules for more detail */
module.exports = {
  parseScript(code) {
    return new Parser(code)
  },
  parseModule(code) {
    /* will do... */
  }
}
