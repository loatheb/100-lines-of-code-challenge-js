var utils = {
    slice: Function.prototype.apply.bind(Array.prototype.slice),
    isElementNode: function(node) {
        return node.nodeType === 1;
    },
    isTextNode: function(node) {
        return node.nodeType === 3;
    },
    'ElementCompiles': {
        modal: function() {
            console.log('modal');
        },
        bind: function() {
            console.log('bind');
        },
        on: function() {
            console.log('on');
        }
    },
    TextCompiles: function (textNode, value) {
        console.log(value);
    }
};
