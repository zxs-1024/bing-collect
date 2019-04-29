import React, { useState } from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '../../store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  container: state.container
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getContainerList: dispatch.container.getContainerList
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = connectedProps

const Container: React.FC<Props> = props => {
  useState(() => {
    props.getContainerList()
  })

  return (
    <div className={classes.container}>
      {props.container.total}
      {props.container.docs.map((item: any, i: number) => {
        return <div key={i}>{item.copyright}</div>
      })}
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)
