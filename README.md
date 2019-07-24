# Bing

🏞 Collect wonderful pictures of Bing every day.

![Bing Image Collect](https://sailor-1256168624.cos.ap-chengdu.myqcloud.com/bing.jpg)

### react-app-rewired

[Override create-react-app webpack configs without ejecting](https://github.com/timarney/react-app-rewired)

1. Install react-app-rewired

```bash
yarn add react-app-rewired -D
```

2. Create a **config-overrides.js** file in the root directory

```js
/* config-overrides.js */
const path = require('path')

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src')
  }
  return config
}
```

### Set tsconfig

add `tsconfig.paths.json` file

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

**tsconfig.json**

```json
{
  "extends": "./tsconfig.paths.json"
}
```

## Flag

- [x] History List
- [ ] Picture Loading blur
- [ ] Test

## Qustion

### React import methods

[MDN | import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

```js
import * as React from 'react'
```

```js
import React, { Component } from 'react'
```

### React Hook useEffect has a missing dependency.

- [How to disable the rule react-hooks/exhaustive-deps](https://github.com/facebook/create-react-app/issues/6880)

## Package

### react-infinite-scroll-component

- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)

### Commitizen

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

#### Install

```bash
## use npm
npm install -g commitizen
## use yarn
yarn global add commitizen
```

#### Init

```bash
commitizen init cz-conventional-changelog --save --save-exact
```

#### Use

```bash
## use git cz after git add .
git add . && git cz
## add script commit in package.json.
## use  npm
npm commit
## use yarn
yarn commit
```

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

