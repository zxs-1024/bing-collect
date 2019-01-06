import React, { Component } from 'react';

import '../style/footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-bottom-wrap clearfix">
            <div className="copyright-info">
              © 2019 <a href="https://www.zhanghao-zhoushan.cn/bing">Bing</a>.
              All right Reserved. Powered by
              <a href="https://github.com/zhanghao-zhoushan/bing-app">
                {' zhanghao-zhoushan'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
