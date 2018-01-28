const Callbacks = function (status) {
  function Callbacks() {
    this.once = !!status;
    this.callback = [];
  }
  Callbacks.prototype.add = function (fn) {
    this.callback.push(fn);
    return this;
  }
  Callbacks.prototype.fire = function () {
    const cbs = this.callback;
    if (this.once && cbs.length) {
      const cb = this.callback.shift();
      cb.apply(cb, arguments);
    } else {
      for (let i = 0, l = cbs.length; i < l; i++) {
        cbs[i]();
      }
    }
    return this;
  }
  return new Callbacks();
}
const Deferred = function () {
  const successCallbacks = new Callbacks(true);
  const failCallbacks = new Callbacks(true);
  function Deferred() {
    this.state = 'pending';
  }
  Deferred.prototype.then = function (resolve, reject) {
    successCallbacks.add(resolve);
    failCallbacks.add(reject);
    return this;
  }
  Deferred.prototype.reject = function (errMsg) {
    this.state = 'rejected';
    failCallbacks.fire(errMsg);
    return this;
  }
  Deferred.prototype.resolve = function () {
    this.state = 'resolved';
    successCallbacks.fire(...arguments);
    return this;
  }
  return new Deferred();
}
Deferred.all = function () {
  const length = arguments.length;
  let resolved = 0;
  const dfd = new Deferred();
  const cb = function () {
    resolved += 1;
    if (resolved === length) {
      dfd.resolve();
    }
  }

  for (let i = 0; i < length; i++) {
    arguments[i].done(cb);
  }
  return dfd;
}
