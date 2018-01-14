const { Component, Children } = require('react')

class Provider extends Component {
  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  getChildContext() {
    // all the react components could get the store by
    // this.context.store
    return { store: this.store }
  }

  render() {
    // ensure that there is only one children component wrapped by Provider
    return Children.only(this.props.children)
  }
}

module.exports = Provider
