const { Component } = require('react')

function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    class Connect extends Component {
      constructor(props, context) {
        this.store = context.store  // provided by the <Provider />
      }

      componentDidMount() {
        this.unsubscribe = this.store.subscribe(this.hasChanged)
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      hasChanged() {
        this.forceUpdate()
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.store.getState(), this.props)}
            {...mapDispatchToProps(this.store.dispatch, this.props)}
          />
        )
      }
    }

    Connect.displayName = `Connect(${WrappedComponent.name || WrappedComponent.displayName})`
    return Connect
  }
}

module.exports = connect
