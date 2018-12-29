import React, { Component } from 'react';
import { Pagination } from 'antd';
import dayjs from 'dayjs';

import axios from './axios';
import BingImage from './components/BingImage';
import './style/App.scss';

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
    axios(`v1/bing/images/${page}/${limit}`).then(({ docs, total }) => {
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
    const date = (docs[0] && docs[0].date) || Date.now();

    return (
      <main className="main">
        <div className="container">
          <h1>{dayjs(date).format('YYYY-MM')}</h1>
          <div className="pictures">
            {docs.map(image => {
              return <BingImage {...image} key={image._id} />;
            })}
          </div>
        </div>
        <div className="pagination">
          {total && (
            <Pagination
              showQuickJumper
              defaultCurrent={page}
              total={total}
              pageSize={limit}
              onChange={this.onChange}
            />
          )}
        </div>
      </main>
    );
  }
}

export default App;
