import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { debounce } from 'throttle-debounce'

import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  container: state.container
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getContainerList: dispatch.container.getContainerList,
  handleSetContainerPage: dispatch.container.handleSetContainerPage
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

const loader = (
  <div className={classes.loadingContent} key={'loading'}>
    <Loading type="Pacman" />
  </div>
)

/**
 * when route back to this page, will call useEffect again. State page init to 0, but rematch data is' not clean.
 * Two methods:
 * 1. ✅ save page in rematch data. 
 * 2. when init useEffect,to clean rematch data, but list date is empty.
 */
const Container: React.FC<Props> = props => {
  const { getContainerList, container } = props
  const [page, setPage] = useState(container.page)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setHasMore(true)
    getContainerList({ page }).then(() => setHasMore(false))
  }, [page, getContainerList])

  /**
   * use react-infinite-scroller
   * loadMore={() => setPage(page + 1)}
   * Maximum update depth exceeded
   * https://github.com/CassetteRocks/react-infinite-scroller/issues/163
   */
  const debounceSetPage = debounce(300, () => {
    setPage(page + 1)
    props.handleSetContainerPage(page + 1)
  })

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={debounceSetPage}
        hasMore={hasMore}
        loader={loader}
        className="row"
      >
        {container.docs.map((image: any, i: number) => {
          return <ImageContent  key={`container_${image._id}`} image={image} i={i} />
        })}
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)
