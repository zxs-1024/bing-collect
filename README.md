# Bing

🏞 Collect wonderful pictures of Bing every day.

![Bing Image Collect](https://sailor-1256168624.cos.ap-chengdu.myqcloud.com/bing.jpg)

### Use react-app-rewired

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

## Feature

- [x] Download image in list page
- [x] History and year list page
- [x] Add infiniteScroll component
- [x] Picture Loading icon
- [x] Details add blur when image load
- [x] Mobile style use @media

## Qustion

### React import methods different

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
