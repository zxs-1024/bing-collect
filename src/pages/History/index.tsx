import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import { iRootState, Dispatch } from '@/store'
import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'
import classes from './index.module.scss'


const mapState = (state: iRootState) => ({
  history: state.history
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getImageHistory: dispatch.history.getImageHistory
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

const loader = (
  <div className={classes.loadingContent} key={'loading'}>
    <Loading type="Pacman" />
  </div>
)

const History: React.FC<Props> = props => {
  const { getImageHistory, history } = props
  const [year, setYear] = useState(new Date().getFullYear())
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    getImageHistory(year)
  }, [year, getImageHistory])

  const handleGetImageHistory = () => {
    const startYear = 2009
    if (year - 1 >= startYear) {
      setYear(year - 1)
    } else {
      setHasMore(false)
    }
  }

  // render doc function
  const renderEveryDoc = (images: [] = []) => {
    const last = images[images.length - 1] || { date: '' }
    const year = new Date(last.date).getFullYear()
    return (
      <div key={year}>
        <h2 className={classes.title}>{year}</h2>
        <div className="row">
          {
            images.map((image: any, i: number) => {
              const { dateString = '' } = image
              return <ImageContent linkPath={`/month/${dateString.slice(0, 6)}`} key={`history_${i}_${image._id}`} image={image} i={i} />
            })
          }
        </div>
      </div>
    )
  }

  return (
    <div className={`${classes.history} container`}>
      <InfiniteScroll
        style={{ overflow: 'infinite' }}
        dataLength={history.docs.length}
        next={handleGetImageHistory}
        hasMore={hasMore}
        loader={loader}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {props.history.docs.map((doc: any) => renderEveryDoc(doc))}
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(History)
