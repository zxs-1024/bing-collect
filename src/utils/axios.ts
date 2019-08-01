import axios from 'axios'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: 'https://zhanghao-zhoushan.cn/bing',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  ({ data }) => data,
  error => {
    return Promise.reject(error)
  }
)

export default instance
