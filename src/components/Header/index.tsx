import React, { useState, useEffect } from 'react'
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
  const [scrollTop, setScrollTop] = useState(0)

  const addEventListenerScroll = () => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || 0
      setScrollTop(scrollTop)
    })
  }

  useEffect(() => {
    addEventListenerScroll()
  }, [])

  const [pathname] = useState('/history')

  return (
    <header className={scrollTop ? classes.hasScroll : ''}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="col-9">
            <div className={classes.inner}>
              {
                (pathname !== window.location.pathname) && <Link
                  className={classes.historyEnter}
                  to={`/history`}
                >
                  History
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
