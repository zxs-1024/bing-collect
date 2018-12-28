import React, { Component } from 'react';

import axios from '../axios';
import '../style/detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
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
    axios(`v1/bing/images/${id}`).then(data => {
      this.setState({ data });
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="detail">
        <img className="detail__image" src={data.url} alt="" />
        <h1>LALLALALLALLAL</h1>
        <div className="detail__content"> {JSON.stringify(data)} </div>
      </div>
    );
  }
}

export default Detail;
