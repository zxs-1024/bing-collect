import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500 });

//

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});

instance.defaults.timeout = 2500;

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    NProgress.start();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    NProgress.done();
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
