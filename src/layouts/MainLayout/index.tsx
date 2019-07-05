import * as React from 'react'
import GithubCorner from 'react-github-corner'

import Header from '@components/Header/index'
import Footer from '@components/Footer/index'

import classes from './index.module.scss'

const MainLayout: React.FC = props => {
  const customHref = 'https://github.com/zhanghao-zhoushan/bing-app'

  return (
    <div className={classes.mainLayout}>
      <GithubCorner
          href={customHref}
          bannerColor="#F5BB41"
          octoColor="#fff"
          size={80}
          direction="right"
          svgStyle={{ mixBlendMode: 'darken' }}
        />
      <Header />
      <main className={`${classes.mainContainer}`}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
