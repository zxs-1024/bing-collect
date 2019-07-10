import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

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
    if (year - 1 > startYear) {
      setYear(year - 1)
    } else {
      setHasMore(false)
    }
  }

  return (
    <div className={`${classes.history} container`}>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleGetImageHistory}
        hasMore={hasMore}
        loader={loader}
        className="row"
      >
        {props.history.docs.map((image: any, i: number) => {
          return <ImageContent key={image.dateString} image={image} i={i} />
        })}
      </InfiniteScroll>

      {/* <div className={classes.historyYears}>
        {
          historyYears.map(year => {
            return <span onClick={() => setYear(year)} className={classes.year} key={year}>{year}</span>
          })
        }
      </div> */}

    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(History)
