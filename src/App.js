import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { throttle } from 'throttle-debounce';

import axios from './axios';
import BingImage from './components/BingImage';
import Loading from './components/Loading';
import './style/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collect: [],
      page: 1,
      total: 0,
      limit: 8,
      hasMoreItems: true
    };
    this.handleSearchData = throttle(1000, this.handleSearchData);
  }

  componentWillMount() {}

  componentDidMount() {}

  handleSearchData = () => {
    let { collect, page, limit } = this.state;
    axios(`api/v1/images/${page}/${limit}`).then(({ docs, total }) => {
      collect = [...collect, ...docs];
      page = page + 1;
      this.setState({ collect, total, page });
    });
  };

  onChange = page => {
    this.setState({ page }, () => {
      this.handleSearchData();
    });
  };

  renderImage = docs => {
    return (
      <div className="row loop">
        {docs.map((image, i) => {
          return <BingImage {...image} i={i} key={image._id} />;
        })}
      </div>
    );
  };

  render() {
    const { collect, page } = this.state;
    const loader = (
      <div className="align-center" key={'loading'}>
        <Loading type="Pacman" />
      </div>
    );

    return (
      <main className="container">
        <InfiniteScroll
          pageStart={page}
          loadMore={this.handleSearchData}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          {this.renderImage(collect)}
        </InfiniteScroll>
      </main>
    );
  }
}

export default App;
