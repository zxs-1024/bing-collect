import * as React from 'react'

import classes from './index.module.scss'

// https://github.com/ant-design/ant-design-pro-layout
// layout component

const mediaLayout: React.FC = props => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>{props.children}</div>
    </div>
  )
}

export default mediaLayout
