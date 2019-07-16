# Bing

🏞 Collect wonderful pictures of Bing every day.

![Bing Image Collect](https://sailor-1256168624.cos.ap-chengdu.myqcloud.com/bing.jpg)

### react-app-rewired

[Override create-react-app webpack configs without ejecting](https://github.com/timarney/react-app-rewired)

1. Install react-app-rewired

```bash
yarn add react-app-rewired -D
```

2. Create a **config-overrides.js**  file in the root directory

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