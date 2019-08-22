import * as React from 'react'

import classes from './index.module.scss'

const BackTop: React.FC = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={classes.backTop} onClick={handleScrollToTop}>
      Top
    </div>
  )
}

export default BackTop
