import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { InfiniteLoader, List } from 'react-virtualized'
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
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getContainerList({ page }).then((data: any) => {
      const docs = data.docs || []
      setLoading(false)
      if (!docs.size) setHasMore(false)
    })
  }, [page, getContainerList])

  const handleSetPage = () => {
    setPage(page + 1)
    // need next page
    props.handleSetContainerPage(page + 2)
  }

  return (
    <div className="container">
      <VirtualizeComponent
        hasNextPage={hasMore}
        isNextPageLoading={isLoading}
        list={container.docs}
        loadNextPage={handleSetPage} />

      {/* <InfiniteScroll
        style={{ overflow: 'infinite' }}
        dataLength={container.docs.length}
        next={handleSetPage}
        hasMore={hasMore}
        loader={loader}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="row">
          {container.docs.map((image: any, i: number) => {
            return <ImageContent key={`container_${i}_${image._id}`} image={image} i={i} />
          })}
        </div>
      </InfiniteScroll> */}
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)

function VirtualizeComponent({
  /** Are there more items to load? (This information comes from the most recent API request.) */
  hasNextPage,
  /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
  isNextPageLoading,
  /** List of items loaded so far */
  list,
  /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
  loadNextPage
}: any) {

  const otherProps = {
    height: 800,
    width: 1000,
    rowHeight: 400,
    rowCount: list.size
  }

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage
    ? list.size + 1
    : list.size

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = isNextPageLoading
    ? () => { }
    : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }: any) => !hasNextPage || index < list.size

  // Render a list item or a loading indicator.
  const rowRenderer = ({ index, key, style }: any) => {
    let content

    if (!isRowLoaded({ index })) {
      content = 'Loading...'
    } else {
      content = <ImageContent image={list.getIn([index])} i={index} />
    }

    return (
      <div
        key={key}
        style={style}
      >
        {content}
      </div>
    )
  }

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          ref={registerChild}
          onRowsRendered={onRowsRendered}
          rowRenderer={rowRenderer}
          {...otherProps}
        />
      )}
    </InfiniteLoader>
  )
}