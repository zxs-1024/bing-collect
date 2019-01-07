import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleDown,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

import routes from './config/router.config';
import RouteWithSubRoutes from './config/RouteWithSubRoutes';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'nprogress/nprogress'; // importing a css file from the nprogress node module
import 'normalize.css';
import './style/index.scss';

library.add(faArrowAltCircleDown);
library.add(faHeart);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <RouteWithSubRoutes key={`${route.path}`} {...route} />
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
