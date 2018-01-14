# tiny-deferred
[![Build Status](https://travis-ci.org/loatheb/tiny-deferred.svg?branch=master)](https://travis-ci.org/loatheb/tiny-deferred)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
> A simple asynchronous JS library.

### install

```shell
npm install tiny-defer-js --save
```

```shell
yarn add tiny-defer-js
```

### usage

1. use script tag directly
 ```js
 <script src="./node_modules/tiny-defer-js/index.js"></script>

 var Deferred = window.Deferred;
 ```

2. use ES module
```js
import Deferred from 'tiny-defer-js';
```

3. use CommonJS
```js
var Deferred  = require('tiny-defer-js');
```

### example

```js
// 引入主文件并新建 Deferred 实例
var Deferred = require('tiny-defer-js');

var deferred = new Deferred();
```

```js
// 这里我们使用 log 函数代表异步操作，通过传入不同的参数代表延迟时间的不同。
var log = function (delayTime) {
    var time = delayTime || 2000;
    setTimeout(function () {
        console.log('something');
        deferred.resolve();
    }, time);
    return deferred;
}
```

```js
// 链式顺序执行
log(1000)
    .then(log)
    .then(log);
```

```js
// 同步执行，全部完成执行回调
Deferred.all(log(1000), log(2000))
    .then(function () {
        console.log('任务全部完成');
    });
```
