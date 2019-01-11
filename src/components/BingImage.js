import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { downloadFile } from '../utils';
import '../style/image.scss';
class BingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {}

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  onload = e => {
    this.setState({ loading: false });
  };

  handleDownloadPictures = url => {
    downloadFile(url);
  };

  render() {
    // const { loading } = this.state
    let {
      imageUrl,
      name,
      copyright = '',
      Continent = '',
      Country = '',
      City = '',
      date = new Date(),
      id,
      i
    } = this.props;

    const [copyrightBefore] = copyright.split('(');
    const first = i % 8 === 0 ? 'first' : '';
    const downLoadUrl = imageUrl.replace(/_1920x1080|_1366x768/, '');

    // 800x600 640x480 320x240
    imageUrl = imageUrl.replace(/1920x1080|1366x768/, '640x480');
    date = dayjs(date).format('DD MMM YYYY');
    copyright = copyright.replace(/\(Bing China\)/, '');

    return (
      <div className={`${first} col-md-6 col-lg-4 item`}>
        <article className="post tag-general tag-world">
          <div className="post-inner-content">
            <div className="img-holder">
              <Link
                className="featured-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
                to={`/detail/${id}`}
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
                  <FontAwesomeIcon
                    className="download"
                    icon="arrow-alt-circle-down"
                  />
                </a>
              </li>
              {/* <li>
                <FontAwesomeIcon className="heart" icon="heart" />
              </li> */}
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

export default BingImage;
