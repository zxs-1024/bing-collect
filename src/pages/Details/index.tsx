import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { iRootState, Dispatch } from '@/store'
import Story from '@/components/Story'
import classes from './index.module.scss'


const mapState = (state: iRootState) => ({
  details: state.details
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getImageDetails: dispatch.details.getImageDetails
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

const Details: React.FC<Props> = props => {
  const { getImageDetails, match: { params: { id } } } = props

  useEffect(() => {
    getImageDetails(id)
  }, [id, getImageDetails])

  // format details data
  const { detail = {}, imageUrl = '' } = props.details
  const miniUrl = imageUrl.replace(/1920x1080|1366x768/, '640x480')
  const { title, date, Continent, Country, City, story: stories = [] } = detail
  const position = [Continent, Country, City]

  return (
    <div className={`${classes.mainContentArea} ${classes.singlePost}`}>
      <article>
        {/* head image use background */}
        <div
          className={`${classes.postHead} blur ${props.isBlur || ''}`}
          style={{ backgroundImage: `url(${props.loading ? miniUrl : imageUrl})` }}
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
              <div className={classes.postContent}>
                <h1>{title}</h1>
                <div className={classes.postMetaStory}>
                  <time>{dayjs(date).format('DD MMM YYYY')}</time>
                  <span className={classes.position}>{position}</span>
                </div>
                {
                  stories.map((story: any) => {
                    return <Story story={story} key={story._id} />
                  })
                }
              </div>
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
