import React from 'react'

class Provider extends React.Component {
  static displayName = 'Provider'

  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }
  /*
    Bind the store also at the context,
    to use the store at context if the high-level component
    is not the secondnary component that not pass the store as props into it.
  */
  getChildContext() {
    return {
      store: this.store
    }
  }

  render () {
    return (
      React.Children.only(this.props.children)
    )
  }
}

export default Provider
