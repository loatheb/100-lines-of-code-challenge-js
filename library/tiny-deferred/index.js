;(function (root) {
    var Callbacks = function (status) {
        function Callbacks() {
            this.once = !!status;
            this.callback = [];
        }
        Callbacks.prototype.add = function (fn) {
            this.callback.push(fn);
            return this;
        }
        Callbacks.prototype.fire = function () {
            var cbs = this.callback;
            if (this.once && cbs.length) {
                var cb = this.callback.shift();
                cb.apply(cb, arguments);
            } else {
                for (var i = 0, l = cbs.length; i < l; i++) {
                    cbs[i]();
                }
            }
            return this;
        }
        return new Callbacks();
    }
    var Deferred = function () {
        var successCallbacks = new Callbacks(true);
        var failCallbacks = new Callbacks(true);
        function Deferred() {
            this.state = 'pending';
        }
        Deferred.prototype.then = function (resolve, reject) {
            successCallbacks.add(resolve);
            if (reject) {
                failCallbacks.add(reject);
            }
            return this;
        }
        Deferred.prototype.reject = function (errMsg) {
            this.state = 'rejected';
            failCallbacks.fire(errMsg);
            return this;
        }
        Deferred.prototype.resolve = function () {
            this.state = 'resolved';
            successCallbacks.fire.apply(successCallbacks, arguments);
            return this;
        }
        return new Deferred();
    }
    Deferred.all = function () {
        var length = arguments.length;
        var resolved = 0;
        var dfd = new Deferred();
        var cb = function () {
            resolved += 1;
            if (resolved === length) {
                dfd.resolve();
            }
        }

        for (var i = 0; i < length; i++) {
            arguments[i].done(cb);
        }
        return dfd;
    }
    Deferred.race = function() {
        var length = arguments.length;
        var finished = false;
        var result = null;
        var dfd = new Deferred();

        var cb = function(result) {
            if (!finished) {
                finished = true;
                dfd.resolve(result);
            }
        }
        for (var i = 0; i < length; i++) {
            arguments[i].done(cb)
        }
        return dfd;
    }

    if(typeof exports === 'object') {
        module.exports = Deferred;
    }else if(typeof define === 'function' && define.amd) {
        define(function() { return root.Deferred = Deferred; })
    }else {
        root.Deferred = Deferred;
    }
})(typeof window === 'object' ? window : global)
