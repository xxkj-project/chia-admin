/**
 * 内容管理 - api
 */
import request from '@/utils/request'
import Qs from 'qs'
const root = '/zbcms'
/**
 * 添加兑换卷 - api
 */
export function operaAddVoucher(data) {
  return request({
    url: root + `/asset/add/voucher?${Qs.stringify(data)}`,
    method: 'post'
  })
}

/**
 * 添加USDT数量 - api
 */
export function operaAddUsdtNum(data) {
  return request({
    url: root + `/asset/add/usdt?${Qs.stringify(data)}`,
    method: 'post'
  })
}
