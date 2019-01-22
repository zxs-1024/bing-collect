import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

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
    const customHref = 'https://github.com/zhanghao-zhoushan/bing-app';
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
        <Navigation />
        <GithubCorner
          href={customHref}
          bannerColor="#F5BB41"
          octoColor="#fff"
          size={80}
          direction="right"
          svgStyle={{ mixBlendMode: 'darken' }}
        />
      </div>
    );
  }
}

export default BasicLayout;
