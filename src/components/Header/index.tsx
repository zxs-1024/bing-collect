import React, { useState, useEffect } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import logo from '../../assets/logo.png'
import classes from './index.module.scss'

type PathParamsType = {
  location: any
}
type PropsType = RouteComponentProps<PathParamsType>

const Logo: React.FC = () => {
  return (
    <div className={classes.logo}>
      <a href="https://www.zhanghao-zhoushan.cn/bing" title="Bing">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

const Header: React.FC<PropsType> = (props) => {
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

  const historyPath = '/history'
  const isHistoryPath = props.location.pathname === historyPath

  return (
    <header className={scrollTop ? classes.hasScroll : ''}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="col-9">
            <div className={classes.rowRight}>
              {
                <Link className={classes.historyEnter} to={isHistoryPath ? '/' : historyPath}>
                  {isHistoryPath ? 'Home' : 'History'}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
