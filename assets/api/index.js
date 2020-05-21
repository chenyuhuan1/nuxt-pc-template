// client端的axios
import AXIOS from 'axios'
import { merge } from '@/assets/js/lodash'
import qs from 'qs'
import { getTokenFromStorage,} from '@/assets/js/index'

import {baseURL} from '@/config'

const axios = AXIOS.create({
  baseURL: baseURL
})

// 请求时的拦截器
axios.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage()
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    console.warn('axios request', error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    //需要重新登录
    const needLoginCode = [400, 401, 420, 421, 430]
    if (needLoginCode.indexOf(response.data.code) > -1) {
      //清除用户信息
      $nuxt.$store.commit('user/clearAllUserData');
      $nuxt.$message({
        message: '登录过期，请重新登录！',
        duration: 1000,
      });
      $nuxt.$router.push({
        name: 'auth-login'
      });
    }
    return response
  },
  (error) => {
    console.warn('axios response', error, error.response)
    return Promise.reject(error)
  }
)

const httpServer = (opts, data) => {
  // http默认配置
  const commonOpts = {}
  const options = merge({}, commonOpts, opts)
  if (options.method === 'get') {
    options.params = data
  } else if (
    options.headers &&
    /application\/json/.test(options.headers['content-type'] || '')
  ) {
    options.data = data
  } else {
    options.data = qs.stringify(data)
  }

  return axios(options)
}

export default httpServer
export { axios }
