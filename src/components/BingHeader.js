import React, { Component } from 'react';
import { DatePicker } from 'antd';

import '../style/header.scss';

const { MonthPicker } = DatePicker;

class BingHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <MonthPicker onChange={this.onChange} placeholder="Select month" />
        </div>
      </header>
    );
  }
}

export default BingHeader;
