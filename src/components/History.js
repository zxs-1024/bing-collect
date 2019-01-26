import React, { Component } from 'react';

import axios from '../axios';
import BingImage from './BingImage';
import Loading from './Loading';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = { collect: [], isLoading: true };
  }

  componentDidMount() {
    this.handleSearchData(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.handleSearchData(nextProps.location.pathname);
    }
  }

  handleSearchData = async pathname => {
    pathname = pathname.replace(/\/history\//, '');
    this.setState({ isLoading: true });
    const collect = await axios(`/api/v1/images/year/${pathname}`);
    this.setState({ collect, isLoading: false });
  };

  renderImage = collect => {
    return (
      <div className="row loop">
        {collect.map((image, i) => {
          return <BingImage {...image} i={i} key={image._id} />;
        })}
      </div>
    );
  };

  render() {
    const { collect, isLoading } = this.state;

    const loader = (
      <div className="align-center" key={'loading'}>
        <Loading type="Pacman" />
      </div>
    );

    return (
      <main className="container">
        {this.renderImage(collect)}
        {isLoading && loader}
      </main>
    );
  }
}

export default History;
