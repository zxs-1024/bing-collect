import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FancyRoute from './FancyRoute';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';

import '../style/layout.scss';

class BasicLayout extends Component {
  state = {
    scrollTop: 0
  };

  componentDidMount() {
    this.addEventListenerScroll();
    this.node.scrollIntoView();
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
      <div
        className={`main-container ${scroll}`}
        ref={node => (this.node = node)}
      >
        <ScrollToTop>
          <Header />
          <div className="layout-container">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
          <Footer />
        </ScrollToTop>
      </div>
    );
  }
}

export default BasicLayout;
