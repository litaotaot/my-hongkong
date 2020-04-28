import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      // component:() => import( /* webpackChunkName: "about" */ "../views/Login/index.vue")
      component: () => import( /* webpackChunkName: "about" */ "../views/index.vue")
      // component:() => import( /* webpackChunkName: "about" */ "../views/User/index.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( /* webpackChunkName: "about" */ "../views/Registry/index.vue")
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ "../views/index.vue"),
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import( /* webpackChunkName: "about" */ "../views/User/index.vue")
        },
        {
          path: 'role',
          name: 'role',
          component: () => import( /* webpackChunkName: "about" */ "../views/Role/index.vue")
        },
        {
          path: 'permission',
          name: 'permission',
          component: () => import( /* webpackChunkName: "about" */ "../views/Authority/index.vue")
        },
        {
          path: 'team',
          name: 'team',
          component: () => import( /* webpackChunkName: "about" */ "../views/Team/index.vue")
        }
      ]
    }
  ]
})
