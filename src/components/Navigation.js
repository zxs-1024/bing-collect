import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/navigation.scss';

class Navigation extends Component {
  render() {
    const now = new Date().getFullYear();
    const end = 2009;
    const collect = new Array(now - end + 1).fill(end);

    return (
      <div className="navigation">
        {collect.map((year, i) => (
          <Link className="history-link" to={`/history/${year + i}`} key={i}>
            {year + i}
          </Link>
        ))}
      </div>
    );
  }
}

export default Navigation;
