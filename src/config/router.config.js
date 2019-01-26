import App from '../App';
import Detail from '../components/Detail';
import History from '../components/History';

const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/story/:id',
    component: Detail
  },
  {
    path: '/history/:year',
    component: History
  }
];

export default routes;
