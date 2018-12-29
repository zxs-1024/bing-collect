import React, { Component } from 'react';
import { Layout } from 'antd';

import RouteWithSubRoutes from '../config/RouteWithSubRoutes';
import BingHeader from './BingHeader';

class BasicLayout extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div className="layout">
        <BingHeader />
        <div className="layout__content">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    );
  }
}

export default BasicLayout;
