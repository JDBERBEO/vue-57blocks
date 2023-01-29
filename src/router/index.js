import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import FavoritesView from '../views/FavoritesView.vue';

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
    path: '/favorite',
    name: 'favorite',
    component: FavoritesView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
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
