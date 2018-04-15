# tiny-react-loadable

## Usage

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'tiny-react-loadable'

const Loading = ({ error, ...props }) => {
  if (error) {
    return (
      <div>
        There is some error when loading the component
      </div>
    )
  }
  return (
    <div>
      Loading...
    </div>
  )
}

const LoadableComponent = Loadable({
  loader: () => import('./MyComponent'),
  loading: Loading,
  render: (LoadableComponent, props) =>
    <LoadableComponent name="tiny-react-loadable" {...props} />
})

ReactDOM.render(
  <LoadableComponent />
, document.getElementById('root'))
```
