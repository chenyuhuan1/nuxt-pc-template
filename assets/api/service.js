import { axios } from './index'

export function getQueryInfoDetail(page, size) {
  const path = '/auth/role/list'
  return axios({
    url: path,
    method: 'get',
    params: {
      page,
      size
    }
  })
}

export function login(account, password) {
  const path = '/account/login'
  return axios({
    url: path,
    method: 'post',
    data: {
      account,
      password
    }
  })
}


