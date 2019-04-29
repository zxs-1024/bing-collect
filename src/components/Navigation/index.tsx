import * as React from 'react'
import { Link } from 'react-router-dom'

import classes from './index.module.scss'

const Navigation: React.FC = () => {
  return (
    <div className={classes.navigation}>
      <Link to={`/history/2019`} />
    </div>
  )
}

export default Navigation
