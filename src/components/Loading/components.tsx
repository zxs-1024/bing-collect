import * as React from 'react'

import classes from './index.module.scss'

const DuaRing: React.FC = () => {
  return <div className={classes.ldsDualRing} />
}

const Ripple: React.FC = () => {
  return (
    <div className={classes.ldsRipple}>
      <div />
      <div />
    </div>
  )
}

const Ellipsis: React.FC = () => {
  return (
    <div className={classes.ldsEllipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

const Pacman: React.FC = () => {
  return (
    <div className={classes.ldsPacman}>
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
      </div>
    </div>
  )
}

export { DuaRing, Ripple, Ellipsis, Pacman }
