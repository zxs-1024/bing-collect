import * as React from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './index.module.scss'
import '@/style/image.scss'
export interface imageContentProps {
  [key: string]: any
}

const ImageContent: React.FC<imageContentProps> = props => {
  let {
    imageUrl = '',
    name,
    copyright = '',
    Continent = '',
    Country = '',
    City = '',
    date = new Date(),
    id,
    i
  } = props.image

  const [copyrightBefore] = copyright.split('(')
  const first = i % 8 === 0 ? 'first' : ''
  const downLoadUrl = imageUrl.replace(/_1920x1080|_1366x768/, '')

  imageUrl = imageUrl.replace(/1920x1080|1366x768/, '640x480')
  date = dayjs(date).format('DD MMM YYYY')
  copyright = copyright.replace(/\(Bing China\)/, '')

  return (
    <div className={`${first} col-md-6 col-lg-4 item loop`}>
      <article className="post tag-general tag-world">
        <div className="post-inner-content">
          <div className="img-holder">
            <Link
              className="featured-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
              to={`/story/${id}`}
            />
          </div>

          <div className="inner">
            <h2 className="post-title">{copyrightBefore}</h2>
            <div className="post-meta">
              <time>{date}</time>
              <div className="tags">{`${Continent} ${Country} ${City}`}</div>
            </div>
          </div>

          <ul className="share">
            <li>
              <a href={downLoadUrl} download={name}>
                {/* <FontAwesomeIcon
                  className="download"
                  icon="arrow-alt-circle-down"
                /> */}
              </a>
            </li>
            {/* <li>
                <FontAwesomeIcon className="heart" icon="heart" />
              </li> */}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ImageContent
