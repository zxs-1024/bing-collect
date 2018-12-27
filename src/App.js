import React, { Component } from 'react';
import { Pagination, Layout } from 'antd';

import axios from './axios';
import BingImage from './components/BingImage';
import Loading from './components/Loading';
import './style/App.scss';

const { Header } = Layout;

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
    axios(`http://localhost:3000/v1/bing/images/${page}/${limit}`).then(
      ({ docs, total }) => {
        this.setState({ docs, total });
      }
    );
  }

  onChange = page => {
    this.setState({ page }, () => {
      this.handleSearchData();
    });
  };

  render() {
    const { docs, total, page, limit } = this.state;
    return (
      <div className="App">
        <Header>
          <Loading type="lds-pacman" />
        </Header>
        <div className="content">
          {docs.map(image => {
            return <BingImage {...image} key={image._id} />;
          })}
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
      </div>
    );
  }
}

export default App;
