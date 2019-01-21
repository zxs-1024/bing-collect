import React, { Component } from 'react';

import '../style/search.scss';

class Search extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="search-trigger">
        {false && (
          <input
            className="search-input"
            type="search"
            value={value}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default Search;
