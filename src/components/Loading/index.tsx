import * as React from 'react'
import { DuaRing, Ripple, Ellipsis, Pacman } from './components'
import classes from './index.module.scss'

export interface LoadingProps {
  [key: string]: string
}

interface componentType {
  [type: string]: React.ReactNode
}

const component: componentType = {
  DuaRing: <DuaRing />,
  Ripple: <Ripple />,
  Ellipsis: <Ellipsis />,
  Pacman: <Pacman />
}

const Loading: React.FC<LoadingProps> = props => {
  return <div className={classes.loadingContent}>{component[props.type]}</div>
}

export default Loading
