/* ESTree standard AST parser, see https://github.com/estree/estree for more detail */
class Parser {
  static index = 0
  static lastIndex = 0

  constructor(code, sourceType) {
    this.source = code
    this.totalLength = code.length

    const body = this.generateBodyByType(sourceType)
    return {
      body,
      sourceType,
      type: 'Program',
    }
  }

  generateBodyByType(sourceType) {
    if (sourceType === 'script') {
      return this.parseScript()
    }

    if (sourceType === 'module') {
      /* TODO: add module support */
    }

    throw new TypeError(`Parser constructor wants 'script' or 'module' as it type, but got ${sourceType}`)
  }

  parseScript() {
    const statements = []
  }

  hasNext() {
    return this.index < this.totalLength
  }

  getCurrentChar() {
    return this.source[this.index]
  }
}

/* see https://tc39.github.io/ecma262/#sec-ecmascript-language-scripts-and-modules for more detail */
module.exports = {
  parseScript(code) {
    return new Parser(code, 'script')
  },
  parseModule(code) {
    /* will do... */
  }
}
