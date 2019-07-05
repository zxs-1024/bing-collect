import * as React from 'react'

import Header from '@components/Header/index'
import Footer from '@components/Footer/index'

import classes from './index.module.scss'

// 
const MainLayout: React.FC = props => {
  return (
    <div className={classes.mainLayout}>
      <Header />
      <main className={`${classes.mainContainer}`}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
