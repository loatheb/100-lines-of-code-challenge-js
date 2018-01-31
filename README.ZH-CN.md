<a href="https://zhangzhao.name">
  <img align="right" width="200" height="200" src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/icon.png" />
</a>

# Tiny All Over The World

[English Doc](https://github.com/loatheb/tiny-all-over-the-world/blob/master/README.md)

这个项目的目的在于把所有前端常用的框架和类库做一个没有任何依赖的最简版本。而在做这件事情的过程中，让每一个人明白这个框架或者库中最深层次最核心的道理。

欢迎任何人 [提出一个 issue](https://github.com/loatheb/tiny-all-over-the-world/issues), [反馈 bug](https://github.com/loatheb/tiny-all-over-the-world/issues), [进行友好讨论](https://github.com/loatheb/tiny-all-over-the-world/issues) 以及 [提一个 PR](https://github.com/loatheb/tiny-all-over-the-world/pulls)。

如果你觉得这个项目对你有帮助或者希望我继续完成下去的话。可以通过[以下方式](#buy-me-coffee)对我进行捐助。

[![Build Status](https://travis-ci.org/loatheb/tiny-all-over-the-world.svg?branch=master)](https://travis-ci.org/loatheb/tiny-all-over-the-world)
[![Dependency Status](https://david-dm.org/loatheb/tiny-all-over-the-world.svg)](https://david-dm.org/loatheb/tiny-all-over-the-world)
[![devDependency Status](https://david-dm.org/loatheb/tiny-all-over-the-world/dev-status.svg)](https://david-dm.org/loatheb/tiny-all-over-the-world/?type=dev)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![platform](https://img.shields.io/badge/platform-osx-yellowgreen.svg)](https://img.shields.io/badge/platform-osx-yellowgreen.svg)

## 目录结构

```shell
.
├── asynchronous
│   ├── co
│   ├── deferred
│   └── eventproxy
├── design-pattern
│   ├── decorator
│   ├── iterator
│   ├── observable
│   └── singleton
├── fastify
│   └── json-stringify
├── framework
│   ├── angular
│   ├── node
│   └── react
├── immutable
│   ├── immer
│   ├── immutable.js
│   └── seamless-immutable
├── infrastructure
│   ├── package-manager
│   └── require
├── library
│   ├── callbacks
│   ├── redux
│   ├── reselect
│   └── router
└── template-engines
    └── ejs
```

## 常见问题及解答

### 什么叫没有第三方依赖

换句话说，没有第三方依赖等同于每一个小的项目不会从第三方下载其他的 dependencies 模块

在我最初看别人的项目代码时，经常会发现他用的某些包我从来没有用过甚至从来没有听过。这种时候，我一般会简单的搜索一下这个包的作用，否则我就不能很清晰的清楚作者使用这个包的真正意图。但这样来回切换会很消磨人对代码的热情。不得不承认 node 的包管理确实很优秀，它有成千上万的包能够解决开发过程中业务遇到的各种问题，但是众口难调，不同的人的使用习惯又导致去学习别人常用的一些模块带来一些额外的学习成本。

所以在这个项目中，每一个 tiny 版的项目都没有第三方的依赖，所有的代码，导入导出的模块都能够从自己的根文件域下获取到，能够更加方便别人学习和梳理其中的逻辑。

### 里面的项目是否可以用于生产环境

最好不要应用于生产环境。

大多数开源项目最终里面会遍布各种各样的 [胶水代码](https://en.wikipedia.org/wiki/Glue_code), 例如在一些关键代码片段进行一些参数类型的校验，或者对某些传入参数进行边界值的检查。在除去这些胶水代码之后，有些包的代码甚至只有几十行。在这种情况下，`tiny-all-over-the-world` 的目的就在于去除这些只为程序健壮性而生的胶水代码，只留下最核心的内核态部分，保证用户态的输入完全正确，就能够将中间层的胶水完全剔除。

而在实际的生产环境中，开发者必须处理不同的业务逻辑。不能保证用户态的输入完全符合要求，这样直接暴露出来的内核态是非常脆弱的，中间则必须有一大部分的胶水代码来作为用户态和内核态的桥梁，才能保证核心代码能正确运行。所以如果你看懂了某一个项目并且希望在生产环境上使用它，那么最好在这个 tiny 版本的基础上再进行一下简单的封装，并且自行承担可能造成的后果，否则就不要使用它，老老实实的使用原来的版本。

### 我对它非常感兴趣，我应该从哪里开始

我觉得从哪里开始都可以。这个项目的目的就在于为了让每一个开发者都大致明白自己手中每天使用的框架的基本原理。事实上，这里面的每一个库又没有其他依赖，都做为一个单独的终端，所以当然可以只从你喜欢的常用的入手并开始。

## 贡献者列表

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/18140164?v=4" width="100px;"/><br /><sub><b>zhao.zhang</b></sub>](https://zhangzhao.name)<br />[💻](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Code") [📖](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Documentation") [⚠️](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Tests") | [<img src="https://avatars1.githubusercontent.com/u/13282699?v=4" width="100px;"/><br /><sub><b>Chang Yan</b></sub>](http://cyan33.github.io)<br />[💻](https://github.com/loatheb/tiny-all-over-the-world/commits?author=cyan33 "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 协议

GPL V3.0

## 捐助

* 一般等价物

| <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/alipay.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/wechat.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/paypal.png" width="300px;"/> |
| :---: | :---: | :---: |

* 数字货币

| <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/BTC.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/ETH.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/EOS.png" width="300px;"/> |
| :---: | :---: | :---: |