import React, { Component } from 'react'

function Loadable({
  loader,
  loading,
  render,
  ...rest
}) {
  return class WrappedComponent extends Component {
    state = {
      component: null,
      error: null
    }

    componentWillMount() {
      loader().then((component) => {
        this.setState({ component })
      }).catch((error) => {
        this.setState({ error })
      })
    }

    render() {
      const { component: C, error } = this.state
      
      if (!C || error) {
        return <Loading loading={!!C} error={error} />
      }

      const customRender = render || (Component, props) => {
        return React.createElement(Component, props)
      }
      
      return customRender(C, this.props)
    }
  }
}

module.exports = Loadable
