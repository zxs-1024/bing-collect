import React, { Component } from 'react';
import { Layout } from 'antd';

import RouteWithSubRoutes from '../config/RouteWithSubRoutes';
import '../style/basic.scss';

const { Header, Footer } = Layout;

class BasicLayout extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div className="layout">
        <Header />
        <div className="layout__content">
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
