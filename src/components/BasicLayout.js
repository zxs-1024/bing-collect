import React, { Component } from 'react';

import RouteWithSubRoutes from '../config/RouteWithSubRoutes';
import Header from './Header';
import '../style/layout.scss';

class BasicLayout extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div className="main-container scroll">
        <Header />
        <div className="layout-container">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    );
  }
}

export default BasicLayout;
