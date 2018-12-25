import React, { Component } from 'react';
import axios from './axios';
import dayjs from 'dayjs';
import LazyLoad from 'react-lazyload';

import {
  Layout,
  Pagination,
  Rate,
  Carousel,
  Card,
  Skeleton,
  Switch,
  Icon,
  Avatar
} from 'antd';
import NProgress from 'nprogress';
import './App.scss';
import './style/banner.scss';

NProgress.configure({ easing: 'ease', speed: 500 });

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

class App extends Component {
  state = {
    docs: [],
    page: 1,
    total: 0
  };
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    this.handleSearchData();
  }

  handleSearchData() {
    const { page } = this.state;
    axios(`http://localhost:3000/v1/bing/images/page/${page}`).then(
      ({ docs, total }) => {
        this.setState({ docs, total });
        NProgress.done();
      }
    );
  }

  onChange = page => {
    this.setState({ page }, () => {
      this.handleSearchData();
    });
  };

  render() {
    const { docs, total, page } = this.state;
    // const banner = list.slice(0, 4)
    return (
      <div className="App">
        <Header />
        {/* <Carousel>
          {banner.map((image, i) => {
            return <img src={image.url} key={i} />
          })}
        </Carousel> */}
        {/* <Rate /> */}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '30px' }}
        >
          {docs.map(({ copyright, date, url }, i) => {
            const formatDate = date ? dayjs(date).format('YYYY-MM-DD') : '';
            return (
              <Card
                key={i}
                hoverable
                style={{ width: '25%' }}
                cover={
                  <LazyLoad height={200} offset={100}>
                    <img alt={copyright} src={url} />
                  </LazyLoad>
                }
              >
                <Meta title={formatDate} description={copyright} />
              </Card>
            );
          })}
        </div>
        <div style={{ marginBottom: '30px' }}>
          <Pagination
            showQuickJumper
            defaultCurrent={page}
            total={total}
            pageSize={12}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
