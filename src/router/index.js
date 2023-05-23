import { createRouter, createWebHistory } from "vue-router";
// import os from 'os'
// function getLocalIP() {
//   let interfaces = os.networkInterfaces()
//   for (let devName in interfaces) {
//     let iface = interfaces[devName]
//     for (let i = 0; i < iface.length; i++) {
//       let alias = iface[i]
//       if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
//         return alias.address
//       }
//     }
//   }
// }
// const ip = getLocalIP()
// console.log('内网地址', ip)
// 官网可知：下面没有指定webpackChunkName，每个组件打包成一个js文件。
// const Foo = () => import('../components/Foo')
// const Aoo = () => import('../components/Aoo')
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
// const Foo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/Foo')
// const Aoo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../components/Aoo')

const routes = [
  // {path:'/',component:resolve => require(['../pages/home/problemList'], resolve)}两种
  {
    path: '/',
    component: () => import('../views/index.vue'),
    redirect: '/main',
    children: [
      { path: 'main', component: () => import('../views/types/main.vue') },
      { path: 'book', component: () => import('../views/types/book.vue') },
      { path: 'plan', component: () => import('../views/types/plan.vue') },
      { path: 'learn', component: () => import('../views/types/learn.vue') },
      { path: 'idea', component: () => import('../views/types/idea.vue') },
      { path: 'myZoom', component: () => import('../views/types/myZoom.vue') },
    ]
  },
  { path: '/login', component: () => import('../views/login.vue') }
]

const white = ['/login', '/404']

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const c_token = localStorage.getItem("user") || true
  const authority = localStorage.getItem("authority") || true;
  const role = to.meta.authority;
  if (to.path === '/register') {
    next();
  } else if ((!c_token || !authority) && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
})

export default router