import React, { Component } from 'react';

import Search from './Search';
import '../style/header.scss';
import logoImage from '../image/logo.png';

function Logo() {
  return (
    <div className="blog-logo">
      <a href="https://www.zhanghao-zhoushan.cn/bing" title="Bing">
        <img src={logoImage} alt="logo" />
      </a>
    </div>
  );
}

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-3 ml-auto">
              <Logo />
            </div>
            <div className="col-9">
              <div className="inner">{/* <Search /> */}</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
