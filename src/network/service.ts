import { message } from 'antd'
import axios from 'axios'
import CustomError from './CustomError'

const env = import.meta.env

const service = axios.create({
  baseURL: env.MODE != 'dev' ? env.VITE_HTTP_BASE_URL : '/api',
  timeout: 10 * 1000,
  headers: {},
})

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    const { data, code, msg } = response.data

    if (code != 1) {
      throw new CustomError(msg, code)
    }

    return data
  },
  function (error: any) {
    if (error instanceof CustomError) {
      message.error(error.message)
      return Promise.reject(error.code)
    } else {
      const { code, msg } = error.response.data
      message.error(msg)
      return Promise.reject(code)
    }
  }
)

export default service
