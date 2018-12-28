import React from 'react';
import App from '../App';
import Detail from '../components/Detail';
import BasicLayout from '../components/BasicLayout';

const routes = [
  {
    path: '/',
    component: BasicLayout,
    exact: true,
    // strict: true,
    routes: [
      {
        path: '',
        component: App
      },
      {
        path: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/login',
    component: () => <h2>Sandwiches</h2>
  }
];

export default routes;
