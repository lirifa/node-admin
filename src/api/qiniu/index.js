import request from '@/api/request'


// 获取七牛云简单上传凭证
export function simpleToken(param) {
  return request({
    url: '/qiniu/simpleToken',
    method: 'get',
    param: param
  })
}
