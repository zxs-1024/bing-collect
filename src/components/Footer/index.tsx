import * as React from 'react'

import classes from './index.module.scss'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.container}>
        {/* clearfix */}
        <div className={classes.footerBottomWrap}>
          <div className={classes.copyrightInfo}>
            © 2019 <a href="https://www.zhanghao-zhoushan.cn/bing-app">Bing</a>.
            All right Reserved. Powered by
            <a href="https://github.com/zhanghao-zhoushan/bing-app">
              {' Sailor'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
