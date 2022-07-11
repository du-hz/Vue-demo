// 1. 引入vue
import Vue from 'vue'
// 2. 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Login from '@/view/newIndex.vue'
// export default new Router({
//   routes: [{ path: '/login', name: '登陆', component: Login}]
// })

// import Login from '@/views/login.vue'
// export default new Router({
//   routes: [{ path: '/login', name: '登陆', component: () => import('@/view/newIndex.vue')}]
// })

// const router = new VueRouter({
//   routes: [{ path: '/home', name: 'home', component: () => import('@/view/newIndex.vue')}]
// })

// export default router


/**
 * 动态改变是否懒加载
 * 这里的意思是：依据当前项目环境，导入对应的文件，
 */
// const _import = require('./_import_' + process.env.NODE_ENV)
// const routes = [
//     {
//         path: '/users',
//         name: 'users',
//         component: _import('view/myIndex')
//     },
//     {
//         path: '/new',
//         name: 'new',
//         component: _import('view/newIndex')
//     },
//     // {
//     //     path: '/404',// 错误页面
//     //     component: _import('components/error/404')
//     // },
//     // {
//     //     path: '*',//处理全局地址错误，当访问一个不存在的uri时，跳转到404.
//     //     redirect: '/404'
//     // }
// ]

const routes = [
    {
        path: '/home',
        name: 'home',
        component:() => import('@/view/myIndex')
    },
    {
        path: '/new',
        name: 'new',
        component: () => import('@/view/newIndex')
    },
    {
      path: '/listCallout',
      name: 'listCallout',
      component: () => import('@/view/listCallout')
    },
    {
        path: '/404',// 错误页面
      component: () => import('@/components/error/404')
      // component: _import('components/error/404')
    },
    {
        path: '*',//处理全局地址错误，当访问一个不存在的uri时，跳转到404.
        redirect: '/404'
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history', // 浏览器地址栏不会出现/#/了，也可以去掉
    routes // (缩写) 相当于 routes: routes
})

export default router