import * as React from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './index.module.scss'
export interface imageContentProps {
  [key: string]: any
}

const ImageContent: React.FC<imageContentProps> = props => {
  let {
    imageUrl = '',
    name,
    copyright = '',
    Continent,
    Country,
    City,
    date,
    id,
    i
  } = props.image

  const [copyrightBefore] = copyright.split('(')
  const first = i % 8 === 0 ? 'first' : ''
  const downLoadUrl = imageUrl.replace(/_1920x1080|_1366x768/, '')

  imageUrl = imageUrl.replace(/1920x1080|1366x768/, '640x480')
  date = dayjs(date || new Date()).format('DD MMM YYYY')
  copyright = copyright.replace(/\(Bing China\)/, '')

  return (
    <div className={`${classes.item} ${first} col-md-6 col-lg-4`}>
      <article className={`${classes.post} tag-general tag-world`}>
        <div className={classes.postInnerContent}>
          <div className={classes.imgHolder}>
            <Link
              className={classes.featuredImage}
              style={{ backgroundImage: `url(${imageUrl})` }}
              to={`/story/${id}`}
            />
          </div>

          <div className={classes.inner}>
            <h2 className={classes.postTitle}>{copyrightBefore}</h2>
            <div className="postMeta">
              <time>{date}</time>
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
