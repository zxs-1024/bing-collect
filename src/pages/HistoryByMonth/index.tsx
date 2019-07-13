import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { debounce } from 'throttle-debounce'

import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  historyByMonth: state.historyByMonth
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getHistoryByMonthList: dispatch.historyByMonth.getHistoryByMonthList
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
  const { getHistoryByMonthList } = props
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setHasMore(true)
    getHistoryByMonthList({ page }).then(() => setHasMore(false))
  }, [page, getHistoryByMonthList])

  /**
   * use react-infinite-scroller
   * loadMore={() => setPage(page + 1)}
   * Maximum update depth exceeded
   * https://github.com/CassetteRocks/react-infinite-scroller/issues/163
   */

  const debounceSetPage = debounce(300, () => setPage(page + 1))

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={debounceSetPage}
        hasMore={hasMore}
        loader={loader}
        className="row"
      >
        {props.container.docs.map((image: any, i: number) => {
          return <ImageContent key={image._id} image={image} i={i} />
        })}
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(HistoryByMonth)
