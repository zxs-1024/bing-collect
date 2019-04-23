import * as React from 'react'
import classes from './index.module.scss';

const MainLayout: React.FC = props => {
  return (
    <div className={classes.layout}>
      <header>header</header>
      <div>{props.children}</div>
      <footer className={classes.footer}>
        footer
      </footer>
    </div>
  )
}

export default MainLayout