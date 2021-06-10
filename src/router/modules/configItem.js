/**
 * 配置管理路由模块
 */
import Layout from '@/views/layout'

// 产品配置
const ProductConfig = () => import(/* webpackChunkName: 'productConfig' */ '@/views/configItem/productConfig')
// 算力配置
const ComputeConfig = () => import(/* webpackChunkName: 'computeConfig' */ '@/views/configItem/computeConfig')

const ConfigItemRouter = {
  path: '/configItem',
  name: 'ConfigItem',
  component: Layout,
  redirect: '/configItem/productConfig',
  alwaysShow: true,
  meta: {
    title: '配置管理',
    icon: 'config'
  },
  children: [
    {
      path: 'productConfig',
      name: 'ProductConfig',
      component: ProductConfig,
      meta: {
        title: '矿机产品配置',
        icon: 'menu'
      }
    },
    {
      path: 'computeConfig',
      name: 'ComputeConfig',
      component: ComputeConfig,
      meta: {
        title: '算力配置',
        icon: 'menu'
      }
    }
  ]
}

export default ConfigItemRouter
