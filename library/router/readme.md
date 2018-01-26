```html
<a target="/a">Go to A</a>
<a target="/b">Go to B</a>
```

```js
Router({
  '/a': function() {
    console.log('a')
  },
  '/b': function() {
    console.log('b')
  },
})
```