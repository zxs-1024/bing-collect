import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import ImageContent from '@/components/ImageContent'
import Loading from '@/components/Loading'

import { iRootState, Dispatch } from '@/store'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
  container: state.container
})

const mapDispatch: any = (dispatch: Dispatch) => ({
  getContainerList: dispatch.container.getContainerList
})

type connectedProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>
type Props = connectedProps

const loader = (
  <div className={classes.loadingContent} key={'loading'}>
    <Loading type="Pacman" />
  </div>
)

// useEffect page in component, data in rematch.
const Container: React.FC<Props> = props => {
  useEffect(() => {
    props.getContainerList()
  })

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={props.getContainerList}
        hasMore={true}
        loader={loader}
        className="row"
      >
        {props.container.docs.map((image: any, i: number) => {
          return <ImageContent key={image.dateString} image={image} i={i} />
        })}
      </InfiniteScroll>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Container)
