<a href="https://zhangzhao.name">
  <img align="right" width="200" height="200" src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/icon.png" />
</a>

# Tiny All Over The World

What I want to do is to achieve the simple and tiny version of the most Front-End frameworks and libraries with non-based. In the process of implementation to understand the core principles of them.

Feel free to [create an issue](https://github.com/loatheb/tiny-all-over-the-world/issues), [report bugs](https://github.com/loatheb/tiny-all-over-the-world/issues), [discussion](https://github.com/loatheb/tiny-all-over-the-world/issues) or [create a Pull Request](https://github.com/loatheb/tiny-all-over-the-world/pulls).

If you think this project is helpful to you or want to support me to continue. You can donate through the [following ways](#buy-me-coffee).

[![Build Status](https://travis-ci.org/loatheb/tiny-all-over-the-world.svg?branch=master)](https://travis-ci.org/loatheb/tiny-all-over-the-world)
[![Dependency Status](https://david-dm.org/loatheb/tiny-all-over-the-world.svg)](https://david-dm.org/loatheb/tiny-all-over-the-world)
[![devDependency Status](https://david-dm.org/loatheb/tiny-all-over-the-world/dev-status.svg)](https://david-dm.org/loatheb/tiny-all-over-the-world/?type=dev)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![platform](https://img.shields.io/badge/platform-osx-yellowgreen.svg)](https://img.shields.io/badge/platform-osx-yellowgreen.svg)

## Structure

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

## FAQ

### What's the meaning of non-based

In another word, **non-based** equals to **each project has no dependencies package from third party**.

At the beginning of looking other people's code, I often meet some packages that I don't even used or heard before. In order to keep looking at what the author did, I must need a brief look at the usage of this package. That really slowly my enthusiasm. I admit that the node package management is indeed a rich variety, but in the learning process need to add more learning costs.

So in this project, each tiny project doesn't have any third-party dependencies, all of the code in their own scope which can be more convenient to review and learn.

### Can I use it in production

No, you can't.

Most open source projects are filled with a lot of [Glue Code](https://en.wikipedia.org/wiki/Glue_code), such as the judgment of some configuration items and some types of boundary processing. Even some of the framework or library core code only a few dozen lines, the purpose of `tiny-all-over-the-world` is to remove useless parameters and boundaries to judge, leaving only the core part.

In the actual production environment, you may need to encapsulate according to different business scenarios. If you have the ability to distinguish between right and wrong, then you can re-package based on this project and use, if not, then my answer is **The Best Do Not Use**, only use it as a learning communication tool.

### I really like this project, where should I start

Actually, my anwser is anywhere. The purpose of this project is to allow you to understand the internal implementation of some of the frameworks you are using every day. They are not dependent on each other, each framework or library is an independent entity, you can choose your favorite or your interested in and start.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/18140164?v=4" width="100px;"/><br /><sub><b>zhao.zhang</b></sub>](https://zhangzhao.name)<br />[💻](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Code") [📖](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Documentation") [⚠️](https://github.com/loatheb/tiny-all-over-the-world/commits?author=loatheb "Tests") | [<img src="https://avatars1.githubusercontent.com/u/13282699?v=4" width="100px;"/><br /><sub><b>Chang Yan</b></sub>](http://cyan33.github.io)<br />[💻](https://github.com/loatheb/tiny-all-over-the-world/commits?author=cyan33 "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

GPL V3.0

## Buy Me Coffee

* Common Currency

| <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/alipay.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/wechat.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/cn/paypal.png" width="300px;"/> |
| :---: | :---: | :---: |

* Digital Currency

| <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/BTC.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/ETH.png" width="300px;"/> | <img src="https://cdn.rawgit.com/loatheb/tiny-all-over-the-world/d5c9d689/assets/EOS.png" width="300px;"/> |
| :---: | :---: | :---: |