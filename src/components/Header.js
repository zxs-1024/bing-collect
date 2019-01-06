import React, { Component } from 'react';
// import { DatePicker } from 'antd'

import '../style/header.scss';
import logo from '../image/Bing-logo-2013.png';

// const { MonthPicker } = DatePicker

class BingHeader extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-3 ml-auto">
              <div className="blog-logo">
                <a
                  href="https://poveglia.hauntedthemes.com"
                  title="Poveglia - Multipurpose Ghost Theme by Haunted Themes"
                >
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-9" />
          </div>
        </div>
      </header>
    );
  }
}

export default BingHeader;
