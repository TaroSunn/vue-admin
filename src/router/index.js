import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login')
const Manage = r => require.ensure([], () => r(require('../pages/Manage')), 'Manage')
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'Home')
const UserList = r => require.ensure([], () => r(require('../pages/UserList')), 'UserList')
const BusinessList = r => require.ensure([], () => r(require('../pages/BusinessList')), 'BusinessList')
const FoodList = r => require.ensure([], () => r(require('../pages/FoodList')), 'FoodList')
const OrderList = r => require.ensure([], () => r(require('../pages/OrderList')), 'OrderList')
const AdminList = r => require.ensure([], () => r(require('../pages/AdminList')), 'AdminList')
const AddShops = r => require.ensure([], () => r(require('../pages/AddShops')), 'AddShops')
const AddGoods = r => require.ensure([], () => r(require('../pages/AddGoods')), 'AddGoods')
const UserDistribution = r => require.ensure([], () => r(require('../pages/UserDistribution')), 'UserDistribution')
const RichTextEditor = r => require.ensure([], () => r(require('../pages/RichTextEditor')), 'RichTextEditor')
const SettingUp = r => require.ensure([], () => r(require('../pages/SettingUp')), 'SettingUp')
const Instructions = r => require.ensure([], () => r(require('../pages/Instructions')), 'Instructions')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/manage',
      component: Manage,
      children: [
        {
          path: '',
          component: Home,
          meta: []
        },
        {
          path: '/userList',
          component: UserList,
          meta: ['数据管理', '用户列表']
        },
        {
          path: '/businessList',
          component: BusinessList,
          meta: ['数据管理', '商家列表']
        },
        {
          path: '/foodList',
          component: FoodList,
          meta: ['数据管理', '商品列表']
        },
        {
          path: '/orderList',
          component: OrderList,
          meta: ['数据管理', '订单列表']
        },
        {
          path: '/adminList',
          component: AdminList,
          meta: ['数据管理', '管理员列表']
        },
        {
          path: '/addShops',
          component: AddShops,
          meta: ['添加数据', '添加商铺']
        },
        {
          path: '/addGoods',
          component: AddGoods,
          meta: ['添加数据', '添加商品']
        },
        {
          path: '/userDistribution',
          component: UserDistribution,
          meta: ['图表', '用户分布']
        },
        {
          path: '/richTextEditor',
          component: RichTextEditor,
          meta: ['编辑', '文本编辑']
        },
        {
          path: '/settingUp',
          component: SettingUp,
          meta: ['设置', '管理员设置']
        },
        {
          path: '/instructions',
          component: Instructions,
          meta: ['说明', '说明']
        }
      ]
    }
  ]
})
