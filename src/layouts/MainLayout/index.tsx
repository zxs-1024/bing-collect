import * as React from 'react'

import Header from '@components/Header/index'
import Footer from '@components/Footer/index'

import classes from './index.module.scss'

const MainLayout: React.FC = props => {
  return (
    <div className={classes.mainLayout}>
      <div className="container">
        <Header />
      </div>

      <div className="container">
        <div className={classes.mainContainer}>{props.children}</div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
