var bindActionCreator = function (actionCreator, dispatch) {
  return function () {
    var args = [].slice.call(arguments)
    return dispatch(actionCreator(args))
  }
}


function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args))
}