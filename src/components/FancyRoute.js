import React from 'react';
import { Route } from 'react-router-dom';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '../style/fancyRoute.scss';

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

class FancyRoute extends React.Component {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default FancyRoute;
