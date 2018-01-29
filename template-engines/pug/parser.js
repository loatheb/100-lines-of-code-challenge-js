const tuples = [
  [/^(\w+)/, 'tag'],
  [/^\n( *)/, 'indent'],
  [/\s?([^\n]+)/, 'text'],
]

module.exports = class Parser {
  constructor(str) {
    this.source = str
    this.capture = []
    this.ast = []
    this.currentLine = 0
    while (this.nextToken) {
      if (!this.source.length) break
    }
  }

  get nextToken() {
    return tuples.some(([reg, type]) => {
      if (reg.test(this.source)) {
        if (type === 'indent') {
          this.currentLine += 1
        }
        this.capture = reg.exec(this.source)
        const token = this.generateToken(type)
        return this.ast.push(token)
      }
      return false
    })
  }

  generateToken(type) {
    this.source = this.source.substr(this.capture[0].length)
    return {
      type,
      val: this.capture[1],
      line: this.currentLine,
    }
  }
}
