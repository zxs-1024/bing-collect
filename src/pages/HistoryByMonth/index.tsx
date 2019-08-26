import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  historyByMonth: state.historyByMonth
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getHistoryByMonth: dispatch.historyByMonth.getHistoryByMonth,
  handleSetHistoryByMonthPage: dispatch.historyByMonth.handleSetHistoryByMonthPage
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

const loader = (
  <div className={classes.loadingContent} key={'loading'}>
    <Loading type="Pacman" />
  </div>
)

// useEffect page in component, data in rematch.
const HistoryByMonth: React.FC<Props> = props => {
  const { getHistoryByMonth, historyByMonth, match: { params: { month } } } = props
  const [page, setPage] = useState(historyByMonth.page)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    getHistoryByMonth({ month, page }).then((data: any = {}) => {
      const docs = data.docs || []
      if (!docs.length) setHasMore(false)
    })
  }, [page, month, getHistoryByMonth])

  const handleSetPage = () => {
    setPage(page + 1)
    // need next page
    props.handleSetHistoryByMonthPage(page + 2)
  }

  return (
    <div className={`${classes.historyByMonth} container`}>
      <InfiniteScroll
        style={{ overflow: 'infinite' }}
        dataLength={historyByMonth.docs.length}
        next={handleSetPage}
        hasMore={hasMore}
        loader={loader}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="row">
          {props.historyByMonth.docs.map((image: any, i: number) => {
            return <ImageContent key={`history_month_${image._id}`} image={image} i={i} />
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(HistoryByMonth)
