/**
 * 提现管理路由模块
 */
import Layout from '@/views/layout'

// 提现列表
const WithdrawList = () => import(/* webpackChunkName: 'withdrawList' */ '@/views/withdraw/withdrawList')

const withdrawRouter = {
  path: '/withdraw',
  name: 'Withdraw',
  component: Layout,
  redirect: '/withdraw/withdrawList',
  alwaysShow: true,
  meta: {
    title: '提现管理',
    icon: 'withdraw'
  },
  children: [
    {
      path: 'withdrawList',
      name: 'WithdrawList',
      component: WithdrawList,
      meta: {
        title: '提现列表',
        icon: 'menu'
      }
    }
  ]
}

export default withdrawRouter
