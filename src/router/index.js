import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // {
  //   path: '/favorite',
  //   name: 'favorite',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
const checkToken = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    return next();
  }

  return next({
    path: '/login',
    query: { redirect: to.fullPath },
  });
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    checkToken(to, from, next);
  } else {
    next();
  }
});

export default router;
