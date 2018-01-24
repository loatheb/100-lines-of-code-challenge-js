```html
<link target="/a">Go to A</link>
<link target="/b">Go to B</link>
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