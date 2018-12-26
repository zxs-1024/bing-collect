import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Button, Icon } from 'antd';

import Loading from './Loading';
import '../style/image.scss';

class BingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {
    this.resizeListener();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  resizeListener = () => {
    const width = document.documentElement.clientWidth / 4;
    const height = (1080 / 1920) * width;
    this.setState({ height });
  };

  onload = e => {
    this.setState({ loading: false });
  };

  render() {
    const { height, loading } = this.state;
    let { url, copyright, date } = this.props;

    date = date ? dayjs(date).format('YYYY-MM-DD') : '';
    copyright = copyright.replace(/\(Bing China\)/, '');

    return (
      // style={{ height }}
      <div className="image__item">
        <img
          style={{ opacity: loading ? 0 : 1 }}
          className="image"
          onLoad={this.onload}
          src={url}
          alt={copyright}
        />

        {loading && <Loading />}

        <div className="hover">
          <p className="copyright">{copyright}</p>
          <div className="panel">
            <Button
              className="margin"
              size="small"
              shape="circle"
              icon="cloud-download"
            />
          </div>
          <p className="date">
            <Icon type="schedule" />
            <span>{date}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default BingImage;
