import BasicLayout from '../components/BasicLayout';
import App from '../App';
import Detail from '../components/Detail';

const routes = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/bing',
        component: App
      },
      {
        path: '/detail/:id',
        component: Detail
      }
    ]
  }
];

export default routes;
