import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '@/components/Loading'

import classes from './index.module.scss'

export interface imageContentProps {
  i: number
  image: any,
  linkPath?: string
}

const ImageContent: React.FC<imageContentProps> = props => {
  const [loading, setLoading] = useState(true)

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

  // First image dom set diff style.
  const isFirst = props.i % 8 === 0 ? classes.first : ''
  // Two size image in data
  const regExp = /_1920x1080|_1366x768/
  // Handle image url, to download image, because nginx set Content-disposition is attachment, browsers will auto download.
  const downLoadUrl = imageUrl.replace(regExp, '')
  // List only need small size image.16 9
  const minImage = imageUrl.replace(regExp, '_640x360')
  // Use props linkPath, default to detail page
  const linkPath = props.linkPath || `/story/${id}`
  const formatDate = dayjs(date).format('DD MMM YYYY')
  const [copyrightBefore] = copyright && copyright.split('(')

  // Image onload, set loading false.
  const handleImageLoaded = () => {
    setLoading(false)
  }

  const linkImageStyle = () => {
    const backgroundImage = minImage ? `url(${minImage})` : 'null'
    const opacity = loading ? 0 : 1
    return { backgroundImage, opacity }
  }

  const handleSaveImageSrc = () => {
    window.sessionStorage.setItem('minImage', minImage)
  }

  return (
    <div className={`${classes.imageContent} ${isFirst} col-md-6 col-lg-4`}>
      <article className={`${classes.post}`}>
        <div className={classes.postInnerContent}>
          <div className={classes.imgHolder}>
            <div className={classes.loading}>
              <Loading type="Pacman" />
            </div>
            <img
              style={{ display: 'none' }}
              src={minImage}
              onLoad={handleImageLoaded}
              alt=""
            />
            {
              <Link
                className={classes.featuredImage}
                style={linkImageStyle()}
                onClick={handleSaveImageSrc}
                to={linkPath}
              />
            }
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
