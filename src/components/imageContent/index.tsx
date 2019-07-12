import * as React from 'react'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './index.module.scss'

export interface imageContentProps {
  i: number
  image: any,
  linkPath?: string
}

const ImageContent: React.FC<imageContentProps> = props => {
  const {
    imageUrl = '',
    date = '',
    name,
    copyright,
    Continent,
    Country,
    City,
    _id: id
  } = props.image

  const [copyrightBefore] = copyright && copyright.split('(')
  const isFirst = props.i % 8 === 0 ? classes.first : ''
  const regExp = /_1920x1080|_1366x768/
  const downLoadUrl = imageUrl.replace(regExp, '')
  const minImage = imageUrl.replace(regExp, '_640x480')
  const formatDate = dayjs(date).format('DD MMM YYYY')
  const linkPath = props.linkPath || `/story/${id}`

  return (
    <div className={`${classes.item} ${isFirst} col-md-6 col-lg-4`}>
      <article className={`${classes.post}`}>
        <div className={classes.postInnerContent}>
          <div className={classes.imgHolder}>
            <Link
              className={classes.featuredImage}
              style={{ backgroundImage: `url(${minImage})` }}
              to={linkPath}
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
