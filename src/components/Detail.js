import React, { Component } from 'react';

import axios from '../axios';
import Stories from './Stories';

import '../style/detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { detail: {} } };
  }

  componentDidMount() {
    // this.handleGetDetails()
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

  render() {
    const {
      data: { imageUrl, detail = {} }
    } = this.state;
    return (
      <div className="main-content-area single-post">
        <article>
          <div
            className="post-head"
            style={{ backgroundImage: `url(${imageUrl})` }}
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
