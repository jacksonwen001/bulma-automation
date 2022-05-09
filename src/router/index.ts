import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/index.vue'
import appRoutes from "./routes";

const constantUrl = [{
  path: '/login',
  name: 'login',
  meta: {
    title: 'login',
  },
  component: () => import('@/views/login/index.vue')
},
{
  path: '/register',
  name: 'register',
  meta: {
    title: 'register',
  },
  component: () => import('@/views/register/index.vue')
},
{
  path: '/404',
  name: '404',
  meta: {
    title: '404',
  },
  component: () => import('@/views/error/404.vue')
},
{
  path: '/401',
  name: '401',
  meta: {
    title: '401',
  },
  component: () => import('@/views/error/401.vue')
},
{
  path: '/500',
  name: '500',
  meta: {
    title: '500'
  },
  component: () => import('@/views/error/500.vue')
},
{
  path: '/403',
  name: '403',
  meta: {
    title: '403'
  },
  component: () => import('@/views/error/403.vue')
},
{
  path: '/test',
  name: 'test',
  meta: {
    title: 'test',
  },
  component: () => import('@/views/test/index.vue')
},

{
  path: '/',
  component: Layout,
  meta: {
    permission: 'dashboard:index:view',
  },
  children: appRoutes
},
{
  path: '/navigation', 
  name: 'navigation', 
  meta: {
      hidden: true, 
      permission: 'navigation:index:view'
  }, 
  component: () => import('@/views/nav/index.vue')
}, 
{
  path: '/:pathMatch(.*)*',
  name: 'not found',
  component: () => import('@/views/error/404.vue')
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantUrl
    
});

export default router;
