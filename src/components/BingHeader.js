import React, { Component } from 'react';
import { Layout } from 'antd';

import '../style/header.scss';

const { Header } = Layout;

class BingHeader extends Component {
  render() {
    return (
      <div className="bing__header">
        <Header />
      </div>
    );
  }
}

export default BingHeader;
