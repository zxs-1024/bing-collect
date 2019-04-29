import * as React from 'react'

import classes from './index.module.scss'

export interface imageContentProps {
  [key: string]: any
}

const imageContent: React.FC<imageContentProps> = props => {
  return (
    <div className={classes.imageContent}>
      {JSON.stringify(props)}
    </div>
  )
}

export default imageContent
