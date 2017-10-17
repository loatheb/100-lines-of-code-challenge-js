var Vue = function(config) {
  var vm = config.data;
  var el = config.el ? document.querySelector(config.el) : document.body;

  function Vue() {
    if (!(this instanceof Vue)) {
      throw new Error(' Use vue with `new` syntax! ');
    }
    this.el = el;
    this.vm = vm;
  }
  return new Vue();
};

module.exports = Vue;