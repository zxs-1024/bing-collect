import React, { Component } from 'react';

import RouteWithSubRoutes from '../config/RouteWithSubRoutes';
import Header from './Header';
import Footer from './Footer';

import '../style/layout.scss';

class BasicLayout extends Component {
  state = {
    scrollTop: 0
  };

  componentDidMount() {
    this.addEventListenerScroll();
  }

  addEventListenerScroll() {
    window.addEventListener('scroll', event => {
      const scrollTop =
        (event.srcElement
          ? event.srcElement.documentElement.scrollTop
          : false) ||
        window.pageYOffset ||
        (event.srcElement ? event.srcElement.body.scrollTop : 0);
      this.setState({ scrollTop });
    });
  }

  render() {
    const { routes } = this.props;
    const { scrollTop } = this.state;
    const scroll = scrollTop === 0 ? '' : 'scroll';

    return (
      <div className={`main-container ${scroll}`}>
        <Header />
        <div className="layout-container">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BasicLayout;
