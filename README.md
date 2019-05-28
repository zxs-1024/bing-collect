# bing-app

:fire: Bing Image Collect

收集必应每日精彩图片

![Bing Image Collect](https://sailor-1256168624.cos.ap-chengdu.myqcloud.com/bing.jpg)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### React 导入问题

[MDN | import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

```js
import * as React from 'react'
```

```js
import React, { Component } from 'react'
```

### 自定义配置

[react-app-rewired](https://github.com/timarney/react-app-rewired)

**install**

```bash
yarn add react-app-rewired -D
```

**config-overrides.js**

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

- [ ] 历史列表
- [ ] 测试用例
