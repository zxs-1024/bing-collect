import * as React from 'react'

import Header from '@components/Header/index'
import Footer from '@components/Footer/index'

import classes from './index.module.scss'

const MainLayout: React.FC = props => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.container}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
