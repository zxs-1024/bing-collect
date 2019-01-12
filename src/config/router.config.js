import App from '../App';
import Detail from '../components/Detail';

const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/story/:id',
    component: Detail
  }
];

export default routes;
