import React, { Component } from 'react';

import axios from '../axios';
import Stories from './Stories';

import '../style/detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        detail: {}
      },
      loading: true
    };
  }

  componentDidMount() {
    this.handleGetDetails();
  }

  handleGetDetails = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios(`/api/v1/images/${id}`).then(data => {
      this.setState({ data });
    });
  };

  handleImageLoaded = e => {
    this.setState({ loading: false });
  };

  render() {
    const {
      data: { imageUrl = '', detail = {} },
      loading
    } = this.state;

    const mini = imageUrl.replace(/1920x1080|1366x768/, '640x480');
    const isBlur = loading ? 'blur' : '';
    return (
      <div className="main-content-area single-post">
        <article>
          <div
            className={`post-head ${isBlur}`}
            style={{ backgroundImage: `url(${loading ? mini : imageUrl})` }}
          />

          <img
            style={{ display: 'none' }}
            src={imageUrl}
            onLoad={this.handleImageLoaded}
            alt=""
          />

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Stories stories={detail} />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Detail;
