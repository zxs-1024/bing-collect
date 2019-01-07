import React, { Component } from 'react';

import '../style/search.scss';

class Search extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="search-trigger">
        <input
          className="search-input"
          type="search"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
