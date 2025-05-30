import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/auth/Register.vue';
import VerifyOtp from '../views/auth/VerifyOtp.vue';
import Login from '../views/auth/Login.vue';
import { useAuthStore } from '../store/auth.js';
import dashboardHome from '../views/dashboard/dashboardHome.vue';

const routes = [
  {
    name: 'dashboar-home',
    path: '/dashboard',
    component: dashboardHome,
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { public: true }
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: { guest: true },
  },
  {
    name: 'verify-otp',
    path: '/verify-otp',
    component: VerifyOtp,
    meta: { guest: true },
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: { guest: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = useAuthStore();

    await store.getUser();

  if (to.meta.public) {
    next();
  }

  if (store.user && to.meta.guest) {
    // If logged in and trying to access guest page → redirect to home
    next({ name: 'home' });
  } else if (!store.user && !to.meta.guest) {
    // If not logged in and trying to access protected page → redirect to login
    next({ name: 'login' });
  } else {
    // Proceed normally
    next();
  }
});

export default router;
