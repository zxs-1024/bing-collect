import React, { Component } from 'react';
// import { DatePicker } from 'antd'

import '../style/header.scss';

// const { MonthPicker } = DatePicker;

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
                  <img
                    src="https://poveglia.hauntedthemes.com/content/images/2018/06/poveglia-premium-ghost-theme.svg"
                    alt="Poveglia - Multipurpose Ghost Theme by Haunted Themes"
                  />
                </a>
              </div>
            </div>
            <div className="col-9">lalala</div>
          </div>
        </div>
      </header>
    );
  }
}

export default BingHeader;
