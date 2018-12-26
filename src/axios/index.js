import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500 });

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    NProgress.start();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
