var Subscribe = function (vm, key, cb) {
  function Subscribe () {
    this.depIds = {};
    this.value = this.init();
  }
  Subscribe.prototype.getValue = function () {
    var data = vm._data;
    return data[key];
  };
  Subscribe.prototype.addDep = function (dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.add(this);
      this.depIds[dep.id] = dep;
    }
  };
  Subscribe.prototype.fire = function () {
    var value = this.init();
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      cb.call(vm, value);
    }
  };
  Subscribe.prototype.init = function () {
    Target = this;
    var value = this.getValue();
    Target = null;
    return value;
  };
  return new Subscribe();
};

module.exports = Subscribe;