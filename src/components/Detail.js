import React, { Component } from 'react';

import axios from '../axios';
import '../style/detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { detail: {} } };
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
    axios(`api/v1/images/${id}`).then(data => {
      this.setState({ data });
    });
  };

  render() {
    const { data } = this.state;
    const { detail = {} } = data;
    return (
      <div className="detail">
        <div className="detail__content">{detail.describe1}</div>
        <div>
          <img className="detail__image" src={data.url} alt="" />
        </div>
      </div>
    );
  }
}

export default Detail;
