import request from '@/api/request'

// 用户注册
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

// 用户登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 用户信息
export function info(data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}
