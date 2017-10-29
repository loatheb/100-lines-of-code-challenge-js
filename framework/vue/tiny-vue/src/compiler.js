var Compile = function(el, vm) {
    var $root = document.querySelector(el);
    
    function Compile() {
        this.$vm = vm;
        this.compile($root);
    }

    Compile.prototype.compile = function(domTree) {
        var childsNode = domTree.childNodes,
            self = this;
        utils.slice(childsNode)
            .forEach(function(childNode) {
                if (utils.isElementNode(childNode)) {
                    self.compileElementNode(childNode);
                } else if (utils.isTextNode(childNode)) {
                    var text = childNode.textContent;
                    if (text) {
                        self.compileTextNode(childNode, text);
                    }
                }
                if (childNode.childNodes && childNode.childNodes.length) {
                    // recrusive
                    self.compile(childNode);
                }
            });
    };
    Compile.prototype.compileElementNode = function(elementNode) {
        // handle ElementNode
        var attrs = elementNode.attributes,
            self = this,
            vPrefixReg = /v-(.*)/,
            behaviourList = ['modal', 'bind', 'on', 'html', 'if', 'else', 'for'];

        utils.slice(attrs)
            .forEach(function(attr) {
                var name = attr.name;
                if (vPrefixReg.test(name)) {
                    // v-XX
                    var value = attr.value;
                    var behaviour = vPrefixReg.exec(name)[1];
                    if (behaviourList.indexOf(behaviour) !== -1) {
                        utils.ElementCompiles[behaviour](elementNode, self.$vm, value);
                    }
                }
            });
    };
    Compile.prototype.compileTextNode = function(textNode, text) {
        // handle textNode
        var mustacheReg = /\{\{(.*)\}\}/,
            self = this;
        if (mustacheReg.test(text)) {
            var mustacheVal = RegExp.$1.trim();
            utils.TextCompiles(textNode, self.$vm , mustacheVal);
        }
    };

    return new Compile();
}

var utils = {
    slice: Function.prototype.apply.bind(Array.prototype.slice),
    isElementNode: function(node) {
        return node.nodeType === 1;
    },
    isTextNode: function(node) {
        return node.nodeType === 3;
    },
    ElementCompiles: {
        modal: function(node, vm, key) {
          var data = vm._data;
          var value = data[key];
          updater.modal(node, value);

          new Subscribe(vm, key, function(value) {
              updater.modal(node, value);
          });
        },
        bind: function() {
            console.log('bind');
        },
        on: function() {
            console.log('on');
        }
    },
    TextCompiles: function (node, vm, key) {
      var data = vm._data;
      var value = data[key];
      updater.text(node, value);

      new Subscribe(vm, key, function(value) {
          updater.text(node, value);
      });
    }
};

var updater = {
  modal: function (node, value) {
    node.value = value;
  },
  text: function (node, value) {
    node.textContent = value;
  }
}
