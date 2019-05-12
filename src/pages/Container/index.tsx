import React, { useState } from 'react'
import { connect } from 'react-redux'

import ImageContent from '@/components/ImageContent'
import { iRootState, Dispatch } from '@/store'
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

// useState page 放在组件中，数据放入 rematch
const Container: React.FC<Props> = props => {
  useState(() => {
    props.getContainerList()
  })
  return (
    <div className="row">
      {props.container.docs.map((image: any, i: number) => {
        return <ImageContent key={i} image={image} i={i} />
      })}
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)
