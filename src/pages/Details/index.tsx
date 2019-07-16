import React, { useState, useEffect } from 'react'
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

  // Format details data
  const { detail = {}, imageUrl = '' } = props.details
  let detailsImageSrc = imageUrl
  const { title, date, Continent, Country, City, story: stories = [] } = detail
  const position = [Continent, Country, City]

  // Get minImage from sessionStorage.
  const handleGetImageSrc = () => window.sessionStorage.getItem('minImage')

  // Init state.
  const [backgroundImage, setBackgroundImage] = useState(`url(${handleGetImageSrc()})`)
  const [filterBlur, setFilterBlur] = useState('blur(10px)')

  // Set backgroundImage when image onload.
  const handleImageLoaded = () => {
    // Picture onLoad method will calls twice, onLoad id to update image src.
    if (detail._id === id) setBackgroundImage(`url(${detailsImageSrc})`)
    setFilterBlur('')
  }

  return (
    <div className={`${classes.mainContentArea} ${classes.singlePost}`}>
      <article>
        {/* head image use background */}
        <div
          className={`${classes.postHead} blur}`}
          style={{ backgroundImage, filter: filterBlur }}
        />
  
        <img
          style={{ display: 'none' }}
          src={detailsImageSrc}
          onLoad={handleImageLoaded}
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
                  stories.map((story: any) => <Story story={story} key={`story_${story._id}`} />)
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
