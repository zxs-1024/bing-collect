import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { debounce } from 'throttle-debounce'

import { iRootState, Dispatch } from '@/store'
import InfiniteScroll from 'react-infinite-scroller'
import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'
import classes from './index.module.scss'


const mapState = (state: iRootState) => ({
  history: state.history
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getImageHistory: dispatch.history.getImageHistory
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = connectedProps

const loader = (
  <div className={classes.loadingContent} key={'loading'}>
    <Loading type="Pacman" />
  </div>
)

const History: React.FC<Props> = props => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    props.getImageHistory(year)
  }, [year])

  const handleGetImageHistory = () => {
    const startYear = 2009
    if (year - 1 >= startYear) {
      setYear(year - 1)
    } else {
      setHasMore(false)
    }
  }

  const debounceGetImageHistory = debounce(300, handleGetImageHistory)

  const renderEveryDoc = (images: any) => {
    const first = images[0] || {}
    const year = new Date(first.date || '').getFullYear()
    return (
      <div key={year}>
        <h2 className={classes.title}>{year}</h2>
        <div className="row">
          {
            images.map((image: any, i: number) => {
              const { dateString = '' } = image
              return <ImageContent linkPath={`/month/${dateString.slice(0, 6)}`} key={image._id} image={image} i={i} />
            })
          }
        </div>
      </div>
    )
  }

  return (
    <div className={`${classes.history} container`}>
      <InfiniteScroll
        pageStart={0}
        loadMore={debounceGetImageHistory}
        hasMore={hasMore}
        loader={loader}
      >
        {props.history.docs.map((doc: any) => renderEveryDoc(doc))}
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(History)
