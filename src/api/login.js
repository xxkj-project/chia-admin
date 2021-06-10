// 登录 - api
import request from '@/utils/request'
import QS from 'qs'
const root = '/zbcms'
/**
 * 登录
 */
export function login(data) {
  return request({
    url: root + `/account/login/name?${QS.stringify(data)}`,
    method: 'post'
  })
}
