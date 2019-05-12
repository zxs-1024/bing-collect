import * as React from 'react'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './index.module.scss'

export interface imageContentProps {
  i: number
  image: any
}

const ImageContent: React.FC<imageContentProps> = props => {
  const {
    imageUrl,
    name,
    copyright,
    Continent,
    Country,
    City,
    date,
    id
  } = props.image

  const [copyrightBefore] = copyright && copyright.split('(')
  const isFirst = props.i % 8 === 0 ? classes.first : ''
  const downLoadUrl = imageUrl && imageUrl.replace(/_1920x1080|_1366x768/, '')
  const minImage = imageUrl && imageUrl.replace(/1920x1080|1366x768/, '640x480')
  const formatDate = dayjs(date || new Date()).format('DD MMM YYYY')

  return (
    <div className={`${classes.item} ${isFirst} col-md-6 col-lg-4`}>
      <article className={`${classes.post}`}>
        <div className={classes.postInnerContent}>
          <div className={classes.imgHolder}>
            <Link
              className={classes.featuredImage}
              style={{ backgroundImage: `url(${minImage})` }}
              to={`/story/${id}`}
            />
          </div>

          <div className={classes.inner}>
            <h2 className={classes.postTitle}>{copyrightBefore}</h2>
            <div className={classes.postMeta}>
              <time>{formatDate}</time>
              <div className={classes.tags}>{`${Continent || ''} ${Country ||
                ''} ${City || ''}`}</div>
            </div>
          </div>

          <ul className={classes.share}>
            <li>
              <a href={downLoadUrl} download={name}>
                <FontAwesomeIcon
                  className={classes.download}
                  icon="arrow-alt-circle-down"
                />
              </a>
            </li>
            {/* <li>
                <FontAwesomeIcon className={classes.heart} icon="heart" />
              </li> */}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ImageContent
