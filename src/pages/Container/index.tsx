import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

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
    getContainerList({ page }).then((data: any) => {
      const docs = data.docs || []
      if (!docs.length) setHasMore(false)
    })
  }, [page, getContainerList])

  const handleSetPage = () => {
    setPage(page + 1)
    // need next page
    props.handleSetContainerPage(page + 2)
  }

  return (
    <div className="container">
      <InfiniteScroll
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
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)
