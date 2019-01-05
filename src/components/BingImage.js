import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// import { Button, Icon, Card } from 'antd';

// import Loading from './Loading'
import '../style/image.scss';
import { downloadFile } from '../utils';

// const { Meta } = Card

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
      url,
      copyright = '',
      Continent,
      Country,
      City,
      date = new Date(),
      id,
      i
    } = this.props;

    date = dayjs(date).format('DD MMM YYYY');
    copyright = copyright.replace(/\(Bing China\)/, '');
    const first = i === 0 ? 'first' : '';

    return (
      <div className={`${first} col-md-6 col-lg-4 item`}>
        <article className="post tag-general tag-world">
          <div className="post-inner-content">
            <div className="img-holder">
              <Link
                className="featured-image"
                style={{ backgroundImage: `url(${url})` }}
                to={`/detail/${id}`}
              />
            </div>

            <div className="inner">
              <h2 className="post-title">
                <a href="/influence-of-social-media-on-self-esteem/">
                  {copyright}
                </a>
              </h2>
              <div className="post-meta">
                <time>{date}</time>
                <div className="tags">{`${Continent} ${Country} ${City}`}</div>
              </div>
              <a
                href="#"
                className="read-later"
                data-id="5b15af070e79df40e5b5d70f"
              >
                <i
                  className="far fa-bookmark"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="Bookmark article"
                />
                <i
                  className="fas fa-bookmark"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="Remove bookmark"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default BingImage;
