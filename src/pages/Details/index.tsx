import React, { useState } from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  details: state.details
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getImageDetails: dispatch.details.getImageDetails
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = connectedProps

const Details: React.FC<Props> = props => {
  useState(() => {
    const { id } = props.match.params
    console.log('call getImageDetails')
    props.getImageDetails(id)
  })
  const {imageUrl = ''} = props.details
  const mini = imageUrl.replace(/1920x1080|1366x768/, '640x480')
  return (
    <div className={`${classes.mainContentArea} ${classes.singlePost}`}>
      <article>
        <div
          className={`${classes.postHead} blur ${props.isBlur || ''}`}
          style={{ backgroundImage: `url(${props.loading ? mini : imageUrl})` }}
        />

        <img
          style={{ display: 'none' }}
          src={imageUrl}
          // onLoad={this.handleImageLoaded}
          alt=""
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <Stories stories={detail} /> */}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Details)
