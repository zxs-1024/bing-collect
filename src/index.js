import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicLayout from './components/BasicLayout';
import routes from './config/router.config';
import './utils/icon';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './style/index.scss';

ReactDOM.render(
  <Router>
    <BasicLayout routes={routes} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
