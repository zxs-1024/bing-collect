import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

import Loading from './Loading';
import '../style/image.scss';
import { downloadFile } from '../utils';

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
    const { loading } = this.state;
    let { url, copyright = '', date, _id } = this.props;

    date = date ? dayjs(date).format('YYYY-MM-DD') : '';
    copyright = copyright.replace(/\(Bing China\)/, '');

    return (
      <Link to={`detail/${_id}`} className="image__item">
        {url && (
          <img
            style={{ opacity: loading ? 0 : 1 }}
            className="image"
            onLoad={this.onload}
            src={url}
            alt={copyright}
          />
        )}
        {/* {!url && <h1 style={{ color: '#61dafb' }} />} */}
        {loading && <Loading type="Ripple" />}
        <div className="hover">
          <p className="copyright">{copyright}</p>
          <div className="panel">
            <Button
              className="margin"
              size="small"
              shape="circle"
              icon="cloud-download"
              onClick={this.handleDownloadPictures.bind(this, url)}
            />
          </div>
          {url && (
            <p className="date">
              <Icon type="schedule" />
              <span>{date}</span>
            </p>
          )}
        </div>
      </Link>
    );
  }
}

export default BingImage;
