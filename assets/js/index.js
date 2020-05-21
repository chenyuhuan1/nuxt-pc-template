import cookies from 'js-cookie'

// 设置/获取/删除token
export function setTokenFromStorage(token) {
  return cookies.set('token', token)
}
export function getTokenFromStorage() {
  return cookies.get('token')
}
export function removeTokenFromStorage() {
  return cookies.remove('token')
}