import * as React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import classes from './index.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={classes.logo}>
      <a href="https://www.zhanghao-zhoushan.cn/bing" title="Bing">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <header>
        <div className="container">
          <div className="row">
            <div className="col-3 ml-auto">
              <Logo />
            </div>
            <div className="col-9">
              <div className="inner">
                <Link
                  className={classes.featuredImage}
                  to={`/history`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
