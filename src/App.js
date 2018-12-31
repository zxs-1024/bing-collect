import React, { Component } from 'react';
import { Pagination } from 'antd';
import dayjs from 'dayjs';

import axios from './axios';
import BingImage from './components/BingImage';
import './style/main.scss';

class App extends Component {
  state = {
    docs: [],
    page: 1,
    total: null,
    limit: 16
  };
  componentWillMount() {}

  componentDidMount() {
    this.handleSearchData();
  }

  handleSearchData() {
    const { page, limit } = this.state;
    axios(`api/v1/images/${page}/${limit}`).then(({ docs, total }) => {
      this.setState({ docs, total });
    });
  }

  onChange = page => {
    this.setState({ page }, () => {
      this.handleSearchData();
    });
  };

  render() {
    const { docs, total, page, limit } = this.state;

    return (
      <main className="container">
        <div className="row loop">
          {docs.map((image, i) => {
            return <BingImage {...image} i={i} key={image._id} />;
          })}
        </div>
      </main>
    );
  }
}

export default App;
