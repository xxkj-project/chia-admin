/*
 * 订单管理路由模块
 */
import Layout from '@/views/layout'

// 兑换卷列表
const VoucherList = () => import(/* webpackChunkName: 'voucherList' */ '@/views/order/voucherList')
// usdt列表
const UsdtList = () => import(/* webpackChunkName: 'usdtList' */ '@/views/order/usdtList')

const contentRouter = {
  path: '/order',
  name: 'Order',
  component: Layout,
  redirect: '/order/voucherList',
  alwaysShow: true,
  meta: {
    title: '订单管理',
    icon: 'content'
  },
  children: [
    {
      path: 'voucherList',
      name: 'voucherList',
      component: VoucherList,
      meta: {
        title: '兑换卷列表',
        icon: 'menu'
      }
    },
    {
      path: 'usdtList',
      name: 'usdtList',
      component: UsdtList,
      meta: {
        title: 'usdt列表',
        icon: 'menu'
      }
    }
  ]
}

export default contentRouter
