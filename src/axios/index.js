import axios from 'axios';

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: 'https://zhanghao-zhoushan.cn/bing/'
});

instance.defaults.timeout = 2500;

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
