import React, { useState } from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  details: state.details
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getContainerList: dispatch.details.getContainerList
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = connectedProps

const Details: React.FC<Props> = props => {
  useState(() => {
    const { id } = props.match.params
    props.getContainerList(id)
  })

  return <div className={classes.details}>{JSON.stringify(props.details)}</div>
}

export default connect(
  mapState,
  mapDispatch
)(Details)
