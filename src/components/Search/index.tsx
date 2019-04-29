import * as React from 'react'

import classes from './index.module.scss'

const Search: React.FC = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="搜索" />
    </div>
  )
}

export default Search
