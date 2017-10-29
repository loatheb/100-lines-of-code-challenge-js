var Hijack = function(data) {
    function Hijack() {
        this._data = data;
        this.hijack(this._data);
    }
    Hijack.prototype.hijack = function(data) {
        var self = this;
        Object.keys(data).forEach(function(key) {
            var value = data[key];

            if (typeof value === 'object') {
                self.hijack(value);
                return;
            }

            var watcher = new Watcher();

            Object.defineProperty(data, key, {
                get: function() {
                    if (Target) {
                        watcher.depend();
                    }
                    return value;
                },
                set: function(newValue) {
                    console.log('value changed ' + value + ' => ' + newValue);
                    watcher.notify();
                    value = newValue;

                    watcher.notify();
                },
                enumerable: true,
                configurable: true
            });

        });
    }
    return new Hijack();
}

var Watcher = function () {
    var subscribes = [];
    var id = 0;
    function Watcher() {
      this.id = id++;
    }
    Watcher.prototype.add = function (subscribe) {
        subscribes.push(subscribe);
    }
    Watcher.prototype.depend = function() {
        Target.addDep(this);
    }
    Watcher.prototype.remove = function (subscribe) {
        var index = subscribes.indexOf(subscribe);

        return index !== -1
            ? subscribes.splice(index, 1)
            : false;
    }
    Watcher.prototype.notify = function () {
        subscribes.forEach(function (subscribe) {
            subscribe.fire();
        });
    }
    return new Watcher();
}
